describe("testService", function() {

    var testService, mock, $rootScope;

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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
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
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
    });

    it("collects console logs", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.consoleCode.string).then(function(result) {
            expect(result.console).toEqual([
                { level: "log", values: ["Hello World"]}
            ]);
            done();
        });
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
    });

    it("collects console errors", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.consoleCode.error).then(function(result) {
            expect(result.console).toEqual([
                { level: "error", values: ["Aaaaah!"]}
            ]);
            done();
        });
        setTimeout(function() {
            $rootScope.$digest();
        }, 100);
    });
});
