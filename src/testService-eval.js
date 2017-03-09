angular.module("jsExercises")
.factory("testService", function($q) {

    function execCodeAndTestExpression(code, expression) {
        var codeToRun = "(function(){" + code + "\ntry { __result = " +
                        expression +
                        "; } catch (e) { __error = e; }})()";

        var __result = null, __error = null;
        var console = new ConsoleProxy();
        try {
            eval(codeToRun);
        } catch(e) {
            __error = e;
        }

        var __deferred = $q.defer();
        if (__error) {
            __deferred.reject({error: __error, console: console.__log });
        } else {
            __deferred.resolve({result: __result, console: console.__log });
        }
        return __deferred.promise;
    }

    function ConsoleProxy() {
        this.__log = [];
    }
    ["log", "error", "warn", "info"].forEach(function(level) {
        ConsoleProxy.prototype[level] = function() {
            this.__log.push({
                level: level, values: Array.prototype.slice.call(arguments)
            });
            console[level].apply(console, arguments);
        };
    });


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

            function handleResult(result) {
                return {
                    expressionResult: result.result,
                    console: result.console,
                    status: result.result === testCase.result ? "pass" : "fail"
                };
            }

            function handleError(result) {
                return {
                    error: result.error.toString(),
                    console: result.console,
                    status: "error"
                };
            }

            return execCodeAndTestExpression(code, testCase.expression)
                   .then(handleResult, handleError);
        }
    }
    return testService;
});
