angular.module("jsExercises")
.service("mock", function() {
    this.challenge = {
        title: "Add Function",
        description: "<p>Return the sum of two numbers.</p>",
        starterCode: "function add(num1, num2) {\n  // write code here.\n}",
        solution: "function add(num1, num2) {\n  return num1 + num2;\n}",
        testCases: [
            {
                expression: "add(1, 3)",
                result: 4,
                console: null
            },
            {
                expression: "add(1, -1)",
                result: 0,
                console: null
            },
            {
                expression: "add(-2, -1)",
                result: -3,
                console: null
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

    this.challenge2 = {
        title: "Function Result to Variable",
        description: "<p>Call the <code>add</code> function to with inputs 2 and 4. Store the result in a variable named <code>total</code></p>",
        starterCode: "function add(num1, num2) {\n  return num1 + num2;\n}",
        solution: "function add(num1, num2) {\n  console.log('called add');\n  return num1 + num2;\n}\n\nvar total = add(2, 4);",
        testCases: [
            {
                description: "It stores the result in a variable named total.",
                expression: "total",
                result: 6
            },
            {
                description: "It calls the function once.",
                expressionDisplay: "Number of function calls",
                expression: "__code__.match(/add\\([^\\)]*\\)/g).length - 1",
                skipCode: true,
                result: 1
            },
            {
                description: "It calls the function with inputs 2 and 4.",
                expressionDisplay: "Called with inputs 2 and 4",
                expression: "__code__.match(/add\\(\\s*2\\s*,\\s*4\\s*\\)/g) && true",
                skipCode: true,
                result: true
            }
        ]
    };

    this.challenge3 = {
        title: "Loop from 1 to 5",
        description: "<p>Use a loop to log the numbers 1 through 5 to the console.</p>",
        starterCode: "",
        solution: "for (var i = 1; i <= 5; i++) {\n  console.log(i)\n}",
        testCases: [
            {
                description: "It logs 1 - 5 to the console.",
                console: [
                    { level: "log", values: [1] },
                    { level: "log", values: [2] },
                    { level: "log", values: [3] },
                    { level: "log", values: [4] },
                    { level: "log", values: [5] }
                ]
            },
            {
                description: "It uses a loop.",
                expressionDisplay: "A loop is used",
                expression: "__code__.match(/(for|while)\\s*\\(/) && true",
                skipCode: true,
                result: true
            }
        ]
    };
});
