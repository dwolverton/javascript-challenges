angular.module("jsExercises", [])
.controller("main", function($scope, $sce, testService, mock) {
    $scope.challengeDescriptionHtml = $sce.trustAsHtml(mock.challenge.description);
    $scope.code = mock.challenge.starterCode;

    $scope.generalError = "Infinite Loop!";
    $scope.testCaseResults = [];

    $scope.$watch('code', function(code) {
        testService.runTestCases(mock.challenge.testCases, code).then(function (testResults) {
            console.log(testResults);
            $scope.testCaseResults = testResults;
        });
    });
})
.factory("challengesService", function(mock) {
    return {
        challengeOne: mock.challenge
    };
})
.factory("testService", function($q) {

    function execCodeAndTestExpression(code, expression) {
        var codeToRun = "(function(){" + code + "\ntry { __result = " +
                        expression +
                        "; } catch (e) { __error = e; }})()";

        var __result = null, __error = null;
        try {
            eval(codeToRun);
        } catch(e) {
            __error = e;
        }

        var __deferred = $q.defer();
        if (__error) {
            __deferred.reject(__error);
        } else {
            __deferred.resolve(__result);
        }
        return __deferred.promise;
    }



    var testService = {
        runTestCases: function(testCases, code) {
            return $q.all(testCases.map(function(testCase) {
                return testService.runTestCase(testCase, code).then(function(testResult) {
                    return {
                        case: testCase,
                        result: testResult
                    };
                });
            }));
        },
        runTestCase: function(testCase, code) {

            function handleResult(expressionResult) {
                return {
                    expressionResult: expressionResult,
                    console: [],
                    status: expressionResult === testCase.result ? "pass" : "fail"
                };
            }

            function handleError(error) {
                return {
                    error: error.toString(),
                    console: [],
                    status: "error"
                };
            }

            return execCodeAndTestExpression(code, testCase.expression)
                   .then(handleResult, handleError);
        }
    }
    return testService;
});
