angular.module("jsExercises")
.value("challengeData", {
    "basic": {
        title: "Basic Structures",
        challenges: [{
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
                    expression: "!!__code__.match(/(for|while)\\s*\\(/)",
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
                    expression: "!!__code__.match(/(for|while)\\s*\\(/)",
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
            title: "forEach word",
            description: '<p>Use a <em>forEach</em> loop to log all the words in this array to the console.</p><pre><code class="js">var words = [ "JavaScript", "for", "the", "win" ];</code></pre>',
            starterCode: "function printWords(words) {\n  // write code here\n}",
            solution: "",
            testCases: [{
                    description: "It logs all words to the console.",
                    expression: 'printWords([ "JavaScript", "for", "the", "win" ])',
                    console: [{
                            level: "log",
                            values: ["JavaScript"]
                        },
                        {
                            level: "log",
                            values: ["for"]
                        },
                        {
                            level: "log",
                            values: ["the"]
                        },
                        {
                            level: "log",
                            values: ["win"]
                        }
                    ]
                }, {
                    description: "... No matter what's in the array.",
                    expression: 'printWords([ "Everything", "is", "Awesome" ])',
                    console: [{
                            level: "log",
                            values: ["Everything"]
                        },
                        {
                            level: "log",
                            values: ["is"]
                        },
                        {
                            level: "log",
                            values: ["Awesome"]
                        }
                    ]
                },
                {
                    description: "It uses a forEach loop.",
                    expressionDisplay: "forEach loop is used",
                    expression: "!!__code__.match(/words\\s*\\.\\s*forEach\\s*\\(/)",
                    skipCode: true,
                    result: true
                },
                {
                    description: "Does NOT use a for loop.",
                    expressionDisplay: "for loop is used",
                    expression: "!!__code__.match(/\\bfor\\b/)",
                    skipCode: true,
                    result: false
                }
            ]
        }, {
            title: "for each word",
            description: '<p>Use a <em>for</em> loop to log all the words in this array to the console.</p><pre><code class="js">var words = [ "JavaScript", "for", "the", "win" ];</code></pre>',
            starterCode: "function printWords(words) {\n  // write code here\n}",
            solution: "",
            testCases: [{
                    description: "It logs all words to the console.",
                    expression: 'printWords([ "JavaScript", "for", "the", "win" ])',
                    console: [{
                            level: "log",
                            values: ["JavaScript"]
                        },
                        {
                            level: "log",
                            values: ["for"]
                        },
                        {
                            level: "log",
                            values: ["the"]
                        },
                        {
                            level: "log",
                            values: ["win"]
                        }
                    ]
                }, {
                    description: "... No matter what's in the array.",
                    expression: 'printWords([ "Everything", "is", "Awesome" ])',
                    console: [{
                            level: "log",
                            values: ["Everything"]
                        },
                        {
                            level: "log",
                            values: ["is"]
                        },
                        {
                            level: "log",
                            values: ["Awesome"]
                        }
                    ]
                },
                {
                    description: "It uses a for loop.",
                    expressionDisplay: "for loop is used",
                    expression: "!!__code__.match(/\\bfor\\s*\\(/)",
                    skipCode: true,
                    result: true
                },
                {
                    description: "Does NOT use a forEach loop.",
                    expressionDisplay: "forEach loop is used",
                    expression: "!!__code__.match(/\\bforEach\\b/)",
                    skipCode: true,
                    result: false
                }
            ]
        }, {
            title: "Increment Array Values",
            description: "<p>Write a loop to add one to all the numbers in this array.</p><pre><code class='js'>var numbers = [ 3, 21, 8 ];</code></pre><p>After your loop runs, the array will contain <code>[ 4, 22, 9 ]</code>. You will be modifying each of the numbers in the array.</p>",
            starterCode: "function incrementNumbers(numbers) {\n  // write code here.\n}",
            solution: "function incrementNumbers(numbers) {\n  for (var i = 0; i < numbers.length; i++)\n    numbers[i]++;\n  }\n}",
            testCases: [{
                    expression: "var numbers = [ 3, 21, 8 ];\nincrementNumbers(numbers);\nnumbers;",
                    result: [ 4, 22, 9 ]
                },
                {
                    expression: "var numbers = [ 1, 2, 3 ];\nincrementNumbers(numbers);\nnumbers;",
                    result: [ 2, 3, 4 ]
                },
                {
                    expression: "var numbers = [ -2, -1, 0 ];\nincrementNumbers(numbers);\nnumbers;",
                    result: [ -1, 0, 1 ]
                },
                {
                    expression: "var numbers = [ 100 ];\nincrementNumbers(numbers);\nnumbers;",
                    result: [ 101 ]
                },
                {
                    expression: "var numbers = [];\nincrementNumbers(numbers);\nnumbers;",
                    result: []
                }
            ]
        }, {
            title: "Add Function",
            description: '<p>Write a function named <code>add</code> that takes two inputs (number1 and number2) and outputs the sum of those numbers.</p><p>"output" here does NOT mean console.log. This is the function giving an answer back.</p>',
            starterCode: "",
            solution: "function add(num1, num2) {\n  return num1 + num2;\n}",
            testCases: [
                {
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
                },
                {
                    description: "The function is named add.",
                    expressionDisplay: "An add function exists",
                    expression: "typeof add === 'function'",
                    result: true
                },
                {
                    description: "The inputs are named number1 and number2.",
                    expressionDisplay: "Two inputs with correct names",
                    expression: "!!__code__.match(/\\(\\s*number1\\s*,\\s*number2\\s*\\)/)",
                    skipCode: true,
                    result: true
                }
            ]
        }, {
            title: "Function Result to Variable",
            description: "<p>Call the <code>add</code> function to with inputs 2 and 4. Store the result in a variable named <code>total</code>.</p>",
            starterCode: "function add(num1, num2) {\n  return num1 + num2;\n}",
            solution: "function add(num1, num2) {\n  return num1 + num2;\n}\n\nvar total = add(2, 4);",
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
                    expression: "!!__code__.match(/add\\(\\s*2\\s*,\\s*4\\s*\\)/)",
                    skipCode: true,
                    result: true
                }
            ]
        }, {
            title: "Function Result to Console",
            description: "<p>Call the <code>add</code> function to with inputs 7 and 19. Log the answer to the console.</p>",
            starterCode: "function add(num1, num2) {\n  return num1 + num2;\n}",
            solution: "function add(num1, num2) {\n  return num1 + num2;\n}\n\nconsole.log( add(2, 4) );",
            testCases: [{
                    description: "It logs the answer to the console.",
                    console: [
                        { level: "log", values: [ 26 ] }
                    ]
                },
                {
                    description: "It calls the function once.",
                    expressionDisplay: "Number of function calls",
                    expression: "__code__.match(/add\\([^\\)]*\\)/g).length - 1",
                    skipCode: true,
                    result: 1
                },
                {
                    description: "It calls the function with inputs 7 and 19.",
                    expressionDisplay: "Called with inputs 7 and 19",
                    expression: "!!__code__.match(/add\\(\\s*7\\s*,\\s*19\\s*\\)/)",
                    skipCode: true,
                    result: true
                }
            ]
        }]
    }
});
