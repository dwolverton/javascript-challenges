angular.module("jsExercises")
.controller("challengeController", function($scope, $routeParams, $sce, challengeService, testService, serialize) {
    $scope.initController();
    $scope.isSubmitEnabled = $scope.isResetEnabled = function() { return false };

    challengeService.getChallenge($routeParams.challengeSetKey, $routeParams.challengeNumber).then(function(challenge) {
        $scope.title = challenge.title;
        $scope.description = challenge.description;
        $scope.code = challenge.starterCode;

        $scope.reset = function() {
            $scope.code = challenge.starterCode;
        };
        $scope.submit = function() {
            challengeService.submit(challenge.setId, challenge.id, $scope.code, $scope.overallResult === 'pass');
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
});
