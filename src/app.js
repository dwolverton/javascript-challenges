angular.module("jsExercises", ["ngRoute", "ui.codemirror"])
.constant("serverUrl", "http://localhost:5000")
.run(function($rootScope, serverUrl) {
    var redirectUri = encodeURIComponent(serverUrl + "/slack-login");
    var returnUri = encodeURIComponent(location.href);
    $rootScope.slackLoginUrl = "https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=4975543103.166932015414&team_id=T04UPFZ31&redirect_uri=" + redirectUri + "&state=" + returnUri;
})
.controller("challengeListController", function($scope, $rootScope, $routeParams, challengeService) {
    $scope.$on("$routeChangeSuccess", loadChallenges);

    function loadChallenges() {
        $scope.challengeSetKey = $routeParams.challengeSetKey;

        if ($scope.challengeSetKey) {
            challengeService.getSet($routeParams.challengeSetKey).then(function(set) {
                $scope.setTitle = set.title;
                var count = 0;
                $scope.challenges = set.challenges.map(function(challenge) {
                    var decorated = {
                        status: count < 2 ? 'done' : count < 5 ? 'visited' : 'unvisited',
                        challenge: challenge
                    };
                    count++;
                    if (count === Number($routeParams.challengeNumber)) {
                        decorated.current = true;
                    }
                    return decorated;
                })
            });
        } else {
            $scope.setTitle = null;
            $scope.challenges = null;
        }
    }
})
.controller("setsController", function($rootScope, $scope, challengeService) {
    $rootScope.openSidebar = true;
    challengeService.getSets().then(function(sets) {
        $scope.sets = sets;
    });
})
.controller("challengeController", function($rootScope, $scope, $routeParams, $sce, challengeService, testService, serialize) {
    $rootScope.openSidebar = false;

    $scope.isSubmitEnabled = $scope.isResetEnabled = function() { return false };
    challengeService.getChallenge($routeParams.challengeSetKey, $routeParams.challengeNumber).then(function(challenge) {
        $scope.title = challenge.title;
        $scope.challengeDescriptionHtml = $sce.trustAsHtml(challenge.description);
        $scope.code = challenge.starterCode;

        $scope.reset = function() {
            $scope.code = challenge.starterCode;
        };
        $scope.submit = function() {
            challengeService.submit(challenge.setId, challenge.id, $scope.code, $scope.overallResult === 'pass');
        };
        $scope.isSubmitEnabled = function() {
            return $scope.code !== challenge.starterCode;
        };
        $scope.isResetEnabled = function() {
            return $scope.code !== challenge.starterCode;
        };

        $scope.testCaseResults = [];

        $scope.$watch('code', serialize(function(done, code) {
            testService.runTestCases(challenge.testCases, code).then(function (testResults) {
                $scope.testCaseResults = testResults;
                $scope.overallResult = testResults.reduce(function(prev, test) {
                    if (test.result.status === 'error') {
                        return 'error';
                    } else if (test.result.status === 'fail' && prev !== 'error') {
                        return 'fail';
                    } else {
                        return prev;
                    }
                }, 'pass');
            }).finally(done);
        }));
    });
})
.filter('highlightjs', function($sce) {
  return function(input) {
    if (input) return $sce.trustAsHtml( hljs.highlight('js', input).value );
    return input;
  }
})
/**
 * wrap a function that has asynchronous components so that it will only run
 * once at a time. The function is passed a `done` function as the first
 * parameter, which it must call when all async processing is complete.
 */
.factory('serialize', function() {
    return function(fn) {
        var queued;
        var running = false;

        function run(args) {
            running = true;
            args = [done].concat(Array.prototype.slice.call(args));
            fn.apply(this, args);
        }

        function done() {
            running = false;
            if (queued) {
                run(queued);
                queued = null;
            }
        }

        return function() {
            if (running) {
                queued = arguments;
            } else {
                run(arguments);
            }
        }
    }
});
