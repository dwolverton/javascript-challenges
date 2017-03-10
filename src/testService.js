angular.module("jsExercises")
.factory("testService", function($q) {
    var LOG_LIMIT = 100;
    var RUNNER_TIMEOUT = 500;

    function execCodeAndTestExpression(code, expression) {
        var deferred = $q.defer();
        var log = [];

        // Prepare the worker to run the code
        var codeToRun = decorateCode(code, expression);
        var worker = new Worker(createWorkerUrl(codeToRun));

        // add a listener for messages from the Worker
        worker.addEventListener('message', function(e){
            if (e.data.type === 'console') {
                var level = e.data.level;
                var values = e.data.values;
                if (log.length < LOG_LIMIT) {
                    console[level].apply(console, values);
                    log.push({ level: level, values: values });
                }
            } else if (e.data.type === 'result') {
                clearTimeout(timeout);
                deferred.resolve({result: e.data.result, console: log });
            }
        });

        // add a listener for errors from the Worker
        worker.addEventListener('error', function(e){
            e.preventDefault();
            clearTimeout(timeout);
            deferred.reject({error: { message: e.message, lineNumber: e.lineno - 1 }, console: log });
        });

        // Kick off the script.
        worker.postMessage({ code: code });

        var timeout = setTimeout(function() {
            worker.terminate();
            deferred.reject({error: { message: 'Infinite Loop'}, console: log });
        }, RUNNER_TIMEOUT);

        return deferred.promise;
    }

    function execOnlyTestExpression(__code__, expression) {
        try {
            var __result__ = eval(expression);
            return $q.resolve({result: __result__});
        } catch (err) {
            return $q.reject({error: { message: err.message }})
        }
    }

    function createWorkerUrl(code) {
        var codeBlob = new Blob([code], {
            type: 'text/javascript'
        });
        return URL.createObjectURL(codeBlob);
    }

    function decorateCode(code, expression) {
        var start = 'var console = {};' +
        '["log", "error", "warn", "info"].forEach(function(level) {' +
            'console[level] = function() {' +
                'postMessage({type:"console", level: level, values: Array.prototype.slice.call(arguments) });' +
            '};' +
        '}); self.addEventListener("message", function(__e__) { __code__ = __e__.data.code;\n'; // The code should not run immediately, but run when we send the start message.
        var end = '\npostMessage({type:"result", result:' + expression + "}); });";

        return start + code + end;
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

            function handleResult(result) {
                var resultMatches = result.result === testCase.result;
                var logsMatch = doLogsMatch(testCase, result);
                var outcome = {
                    expressionResult: result.result,
                    console: result.console,
                    status: resultMatches && logsMatch ? "pass" : "fail"
                };
                if (!logsMatch) {
                    outcome.error = { message: "Console logs do not match." };
                }
                return outcome;
            }

            function doLogsMatch(testCase, result) {
                if (angular.isArray(testCase.console)) {
                    return angular.equals(testCase.console, result.console);
                } else {
                    return true;
                }
            }

            function handleError(result) {
                return {
                    error: result.error,
                    console: result.console,
                    status: "error"
                };
            }

            return (testCase.skipCode ?
                execOnlyTestExpression(code, testCase.expression) :
                execCodeAndTestExpression(code, testCase.expression) )
                   .then(handleResult, handleError);
        }
    }
    return testService;
});
