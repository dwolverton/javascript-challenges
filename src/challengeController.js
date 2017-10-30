angular.module("jsExercises")
.controller("challengeController", function($scope, $routeParams, $sce, $uibModal, challengeService, testService, serialize) {
    $scope.initController();
    $scope.isSubmitEnabled = $scope.isResetEnabled = function() { return false };
    $scope.loading = true;

    challengeService.getChallenge($routeParams.challengeSetKey, $routeParams.challengeNumber).then(function(challenge) {
        $scope.loading = false;
        var hintModal;

        var runTestsForCode = serialize(function(done, code) {
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
                $scope.lastRunCode = code;
            }).finally(done);
        });

        $scope.run = function() {
            runTestsForCode($scope.code);
        }
        $scope.reset = function() {
            $scope.code = challenge.starterCode || "";
            $scope.run();
        };
        $scope.submit = function() {
            challengeService.submit(challenge.setId, challenge.id, $scope.lastRunCode, $scope.overallResult === 'pass');
            var nextChallengeNumber = parseInt($routeParams.challengeNumber) + 1;
            showHint(true, "/c/" + $routeParams.challengeSetKey + "/" + nextChallengeNumber);
        };
        $scope.isSubmitEnabled = function() {
            return $scope.code !== challenge.starterCode && $scope.overallResult === 'pass';
        };
        $scope.isSaveEnabled = function() {
            return $scope.code !== challenge.starterCode;
        };
        $scope.isResetEnabled = function() {
            return $scope.code !== challenge.starterCode;
        };
        $scope.showHint = function() {
            showHint();
        };
        function showHint(isSubmit, nextLink) {
            var templateUrl = isSubmit ?
                'templates/challengeSubmitModal.html' :
                'templates/challengeHintModal.html';

            console.log(templateUrl);

            hintModal = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: templateUrl,
                controller: 'challengeHintModalController',
                size: 'lg',
                resolve: {
                    options: function() { return {
                        solution: challenge.solution,
                        myCode: $scope.code,
                        nextLink: nextLink
                    }; }
                }
            });
            hintModal.result.finally(function() {
                hintModal = null;
            });
        }
        $scope.$on('$destroy', function() {
            if (hintModal) {
                hintModal.close();
            }
        })
        $scope.keyPress = function(event) {
            if ((event.ctrlKey || event.metaKey) && event.keyCode === 13) {
                $scope.run();
            }
        };

        var stopAutoRun = null;
        $scope.$watch("preferences.autoRun", function(autoRun) {
            if (autoRun) {
                stopAutoRun = $scope.$watch("code", $scope.run);
            } else if (stopAutoRun) {
                stopAutoRun();
            }
        });
        $scope.ctrlKeySymbol = navigator.platform && navigator.platform.startsWith("Mac") ? "⌘" : "Ctrl";

        $scope.testCaseResults = [];
        $scope.title = challenge.title;
        $scope.description = challenge.description;
        $scope.reset();
    });
});
