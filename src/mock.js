angular.module("jsExercises")
.service("mock", function() {
    this.challenge = {
        description: "<p>Return the sum of two numbers.</p>",
        starterCode: "function add(num1, num2) {\n  // write code here.\n}",
        solution: "function add(num1, num2) {\n  return num1 + num2;\n}",
        testCases: [
            {
                expression: "add(1, 3)",
                result: 4,
                console: []
            },
            {
                expression: "add(1, -1)",
                result: 0,
                console: []
            },
            {
                expression: "add(-2, -1)",
                result: -3,
                console: []
            }
        ]
    };
    this.brokenCode = "function add(num1, num2) {\n  return num1 - num2;\n}";
    this.erroringFunctionCode = "function add(num1, num2) {\n  return huh + none;\n}";
    this.brokenSyntaxCode = "function add(num1 num2) {\n  return num1 + num2; }";
    this.brokenSyntaxWithinCode = "function add(num1, num2) {\n  return num1 plus num2; }";
    this.openBracketCode = "function add(num1, num2) {\n  return num1 + num2;";
    this.missingFunctionCode = "console.log('hello world');"
    this.consoleCode = {
        string: this.challenge.solution + " console.log('Hello World')",
        object: this.challenge.solution + " console.log({x: 1})",
        combo: this.challenge.solution + " console.log({x: 1})",
        error: this.challenge.solution + " console.error('Aaaaah!')"
    };

    this.testCaseResults = [
        {
            functionCall: "add(1, 3)",
            expected: {
                result: 4,
                console: []
            },
            actual: {
                result: 4,
                console: [
                    "3",
                    "Hello World"
                ]
            },
            status: "pass"
        },
        {
            functionCall: "add(1, -1)",
            expected: {
                result: 0,
                console: []
            },
            actual: {
                result: 2,
                console: [
                    "2",
                    "Hello World"
                ]
            },
            status: "fail"
        },
        {
            functionCall: "add(-2, -1)",
            expected: {
                result: -3,
                console: []
            },
            actual: {
                result: undefined,
                console: [
                ],
                error: "num7 is undefined"
            },
            status: "error"
        }
    ];
});
