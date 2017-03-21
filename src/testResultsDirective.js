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
})
.directive("statusBadge", function() {
    return {
        scope: {
            status: "="
        },
        template: '<span class="test-status-indicator test-status-indicator-{{status}}">{{text()}}</span>',
        controller: function($scope) {
            $scope.text = function() {
                switch ($scope.status) {
                    case 'pass':
                        return 'Pass';
                    case 'fail':
                        return 'Fail';
                    case 'error':
                        return 'Error';
                }
            }
        }
    }
});
