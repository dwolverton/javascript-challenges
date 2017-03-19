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
        }
    }
});
