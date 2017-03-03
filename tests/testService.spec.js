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
        $rootScope.$digest();
    });

    it("fails with incorrect solution", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenCode).then(function(result) {
            expect(result).toEqual({
                expressionResult: -2,
                console: [],
                status: "fail"
            });
            done();
        });
        $rootScope.$digest();
    });

    it("errors with erroring solution", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.erroringFunctionCode).then(function(result) {
            expect(result).toEqual({
                error: "ReferenceError: Can't find variable: huh",
                console: [],
                status: "error"
            });
            done();
        });
        $rootScope.$digest();
    });

    it("errors with broken syntax within function", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenSyntaxWithinCode).then(function(result) {
            expect(result).toEqual({
                error: "SyntaxError: Expected an identifier but found 'plus' instead",
                console: [],
                status: "error"
            });
            done();
        });
        $rootScope.$digest();
    });

    it("errors with broken syntax", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.brokenSyntaxCode).then(function(result) {
            expect(result).toEqual({
                error: "SyntaxError: Expected token ')'",
                console: [],
                status: "error"
            });
            done();
        });
        $rootScope.$digest();
    });

    it("errors with unclosed bracket", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.openBracketCode).then(function(result) {
            expect(result).toEqual({
                error: "SyntaxError: Unexpected token ')'",
                console: [],
                status: "error"
            });
            done();
        });
        $rootScope.$digest();
    });

    it("errors if function does not exist", function(done) {
        testService.runTestCase(mock.challenge.testCases[0], mock.missingFunctionCode).then(function(result) {
            expect(result).toEqual({
                error: "ReferenceError: Can't find variable: add",
                console: [],
                status: "error"
            });
            done();
        });
        $rootScope.$digest();
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
        $rootScope.$digest();
    });
});
