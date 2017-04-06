angular.module("jsExercises", ["ngRoute", "ui.codemirror"])
.controller("challengeListController", function($scope, $rootScope, $routeParams, challengeService) {

    $scope.$on("$routeChangeSuccess", loadChallenges);

    function loadChallenges() {
        $scope.challengeSetId = $routeParams.challengeSetId;

        if ($scope.challengeSetId) {
            challengeService.getSet($routeParams.challengeSetId).then(function(set) {
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
    challengeService.getChallenge($routeParams.challengeSetId, $routeParams.challengeNumber).then(function(challenge) {
        $scope.title = challenge.title;
        $scope.challengeDescriptionHtml = $sce.trustAsHtml(challenge.description);
        $scope.code = challenge.starterCode;

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
