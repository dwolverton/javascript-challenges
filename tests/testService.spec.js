describe("testService", function() {

    var testService, mock, $rootScope;
    var digestInterval;

    beforeAll(function() {
        digestInterval = setInterval(function() {
            $rootScope && $rootScope.$apply();
        }, 50);
    });
    afterAll(function() {
        clearInterval(digestInterval);
    });

    beforeEach(module("jsExercises"));
    beforeEach(inject(function(_testService_, _mock_, _$rootScope_) {
        testService = _testService_;
        mock = _mock_;
        $rootScope = _$rootScope_;
    }));

    it("passess with correct solution", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.challenge.solution).then(function(result) {
            expect(result).toEqual({
                expressionResult: mock.challenge.testCases[0].result,
                console: [],
                status: "pass"
            });
            done();
        });
    });

    it("fails with incorrect solution", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                expressionResult: -2,
                status: "fail"
            });
            done();
        });
    });

    it("errors with erroring solution", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.erroringFunctionCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                error: { message: "ReferenceError: Can't find variable: huh", lineNumber: 2 },
                status: "error"
            });
            done();
        });
    });

    it("errors with broken syntax within function", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenSyntaxWithinCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                error: { message: "SyntaxError: Expected an identifier but found 'plus' instead", lineNumber: 2 },
                status: "error"
            });
            done();
        });
    });

    it("errors with broken syntax", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenSyntaxCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                error: { message: "SyntaxError: Expected token ')'", lineNumber: 1 },
                status: "error"
            });
            done();
        });
    });

    it("errors with unclosed bracket", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.openBracketCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                error: { message: "SyntaxError: Unexpected token ')'", lineNumber: 3 },
                status: "error"
            });
            done();
        });
    });

    it("errors if function does not exist", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.missingFunctionCode).then(function(result) {
            delete result.console;
            expect(result).toEqual({
                error: { message: "ReferenceError: Can't find variable: add", lineNumber: 2 },
                status: "error"
            });
            done();
        });
    });

    it("passess with correct single log", function(done) {
        var code = "console.log('a'); console.log('b');";
        var testCase = {
            console: [
                { level: "log", values: ["a"] },
                { level: "log", values: ["b"] }
            ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                console: testCase.console,
                status: "pass"
            });
            done();
        });
    });

    it("passess with correct logs", function(done) {
        var code = "console.log('a'); console.warn('b');";
        var testCase = {
            console: [
                { level: "log", values: ["a"] },
                { level: "warn", values: ["b"] }
            ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                console: testCase.console,
                status: "pass"
            });
            done();
        });
    });

    it("fails if logs missing", function(done) {
        var code = "";
        var testCase = {
            console: [
                { level: "log", values: ["a"] }
            ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                error: { message: "Console logs do not match." },
                console: [],
                status: "fail"
            });
            done();
        });
    });

    it("fails if logs extra", function(done) {
        var code = "console.log('a')";
        var testCase = {
            console: []
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                error: { message: "Console logs do not match." },
                console: [ { level: "log", values: ["a"] } ],
                status: "fail"
            });
            done();
        });
    });

    it("fails if logs different", function(done) {
        var code = "console.log('a')";
        var testCase = {
            console: [ { level: "log", values: ["b"] } ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                error: { message: "Console logs do not match." },
                console: [ { level: "log", values: ["a"] } ],
                status: "fail"
            });
            done();
        });
    });

    it("fails if logs different level", function(done) {
        var code = "console.log('a')";
        var testCase = {
            console: [ { level: "warn", values: ["a"] } ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                error: { message: "Console logs do not match." },
                console: [ { level: "log", values: ["a"] } ],
                status: "fail"
            });
            done();
        });
    });

    it("fails if log count different", function(done) {
        var code = "console.log('a')";
        var testCase = {
            console: [
                { level: "log", values: ["a"] },
                { level: "log", values: ["a"] }
            ]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: undefined,
                error: { message: "Console logs do not match." },
                console: [ { level: "log", values: ["a"] } ],
                status: "fail"
            });
            done();
        });
    });

    it("can run multiple test cases", function(done) {
        testService.runTestCases(mock.challenge.testCases, mock.challenge.solution).then(function(result) {
            expect(result).toEqual([{ case: mock.challenge.testCases[0], result: {
                expressionResult: mock.challenge.testCases[0].result,
                console: [],
                status: "pass"
            } },
            { case: mock.challenge.testCases[1], result: {
                expressionResult: mock.challenge.testCases[1].result,
                console: [],
                status: "pass"
            }},
            { case: mock.challenge.testCases[2], result: {
                expressionResult: mock.challenge.testCases[2].result,
                console: [],
                status: "pass"
            }}]);
            done();
        });
    });

    it("collects console logs", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.consoleCode.string).then(function(result) {
            expect(result.console).toEqual([
                { level: "log", values: ["Hello World"]}
            ]);
            done();
        });
    });

    it("collects console errors", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.consoleCode.error).then(function(result) {
            expect(result.console).toEqual([
                { level: "error", values: ["Aaaaah!"]}
            ]);
            done();
        });
    });

    it("does not execute code if skipCode option set, and can pass", function(done) {
        var code = "console.log('a');";
        var testCase = {
            expression: '__code__ === "console.log(\'a\');"',
            result: true,
            skipCode: true
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: true,
                status: "pass",
                console: undefined
            });
            done();
        });
    });

    it("does not execute code if skipCode option set, and can fail", function(done) {
        var code = "console.log('a');";
        var testCase = {
            expression: '__code__ === "something else"',
            result: true,
            skipCode: true
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: false,
                status: "fail",
                console: undefined
            });
            done();
        });
    });

    it("when expression is multiple lines, the last line is the result", function(done) {
        var code = "var x = 1;";
        var testCase = {
            expression: "var y = 7;\nx + y;",
            result: 8
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: 8,
                status: "pass",
                console: []
            });
            done();
        });
    });

    it("compares arrays without using strict comparison", function(done) {
        var code = "var x = [1, 2, 3];";
        var testCase = {
            expression: "x",
            result: [1, 2, 3]
        };

        testService.runTestCase(testCase, code).then(function(result) {
            expect(result).toEqual({
                expressionResult: [1, 2, 3],
                status: "pass",
                console: []
            });
            done();
        });
    });
});
