angular.module("jsExercises")
.directive("testResults", function() {

    return {
        scope: {
            results: "="
        },
        templateUrl: "templates/testResults.html",
        controller: function($scope) {
            $scope.isConsoleTest = function(testResult) {
                return !!testResult.case.console;
            };
            $scope.getTestType = function(testResult) {
                if (testResult.case.lint) {
                    return 'lint';
                } else if (testResult.case.console) {
                    return 'console';
                } else {
                    return 'result';
                }
            }
        }
    }
});
