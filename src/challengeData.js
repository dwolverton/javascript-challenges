angular.module("jsExercises")
    .value("challengeData", {
        "basic": [{
            title: "Loop from 0 to 4",
            description: "<p>Write a loop to log the numbers 0 through 4 to the console.</p>",
            starterCode: "",
            solution: "for (var i = 0; i < 5; i++) {\n  console.log(i)\n}",
            testCases: [{
                    description: "It logs 0 - 4 to the console.",
                    console: [{
                            level: "log",
                            values: [0]
                        }, {
                            level: "log",
                            values: [1]
                        },
                        {
                            level: "log",
                            values: [2]
                        },
                        {
                            level: "log",
                            values: [3]
                        },
                        {
                            level: "log",
                            values: [4]
                        }
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
        }, {
            title: "Loop from 1 to 5",
            description: "<p>Write a loop to log the numbers 1 through 5 to the console.</p>",
            starterCode: "",
            solution: "for (var i = 1; i <= 5; i++) {\n  console.log(i)\n}",
            testCases: [{
                    description: "It logs 1 - 5 to the console.",
                    console: [{
                            level: "log",
                            values: [1]
                        },
                        {
                            level: "log",
                            values: [2]
                        },
                        {
                            level: "log",
                            values: [3]
                        },
                        {
                            level: "log",
                            values: [4]
                        },
                        {
                            level: "log",
                            values: [5]
                        }
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
        }, {
            title: "If above 100",
            description: "<p>Given the variable <code>num</code> which contains a number, write code to return <code>true</code> if it is greater than 100 and <code>false</code> otherwise.",
            starterCode: "function isAbove100(num) {\n  // write code here.\n}",
            solution: "function isAbove100(num) {\n  if (num > 100) {\n    return true;\n  } else {\n    return false;\n  }\n}",
            testCases: [{
                    expression: "isAbove100(99)",
                    result: false
                },
                {
                    expression: "isAbove100(101)",
                    result: true
                },
                {
                    expression: "isAbove100(100)",
                    result: false
                },
                {
                    expression: "isAbove100(2000)",
                    result: true
                },
                {
                    expression: "isAbove100(-200)",
                    result: false
                }
            ]
        }, {
            title: "Add Function",
            description: "<p>Return the sum of two numbers.</p>",
            starterCode: "function add(num1, num2) {\n  // write code here.\n}",
            solution: "function add(num1, num2) {\n  return num1 + num2;\n}",
            testCases: [{
                    expression: "add(1, 3)",
                    result: 4
                },
                {
                    expression: "add(1, -1)",
                    result: 0
                },
                {
                    expression: "add(-2, -1)",
                    result: -3
                }
            ]
        }, {
            title: "Function Result to Variable",
            description: "<p>Call the <code>add</code> function to with inputs 2 and 4. Store the result in a variable named <code>total</code></p>",
            starterCode: "function add(num1, num2) {\n  return num1 + num2;\n}",
            solution: "function add(num1, num2) {\n  console.log('called add');\n  return num1 + num2;\n}\n\nvar total = add(2, 4);",
            testCases: [{
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
        }]
    });
