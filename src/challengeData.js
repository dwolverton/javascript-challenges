angular.module("jsExercises")
.value("challengeData", {
    "_sets": [{
        id: 1,
        key: "basic",
        title: "Basic Structures",
        description: "<p>Practice the fundamental JavaScript structures such as loops, conditionals and functions.</p>"
    }],
    "basic": {
        title: "Basic Structures",
        challenges: [{
            "description": "<p>Write a loop to log the numbers 0 through 4 to the console.</p>",
            "starterCode": "",
            "solution": "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
            "testCases": [
                {
                    "description": "It logs 0 - 4 to the console.",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                0
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                1
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                2
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                3
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                4
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It uses a loop.",
                    "expressionDisplay": "A loop is used",
                    "expression": "!!__code__.match(/(for|while)\\s*\\(/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                }
            ],
            "title": "Loop from 0 to 4",
            "id": 1
        }, {
            "description": "<p>Write a loop to log the numbers 1 through 5 to the console.</p>",
            "starterCode": "",
            "solution": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
            "testCases": [
                {
                    "description": "It logs 1 - 5 to the console.",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                1
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                2
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                3
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                4
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                5
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It uses a loop.",
                    "expressionDisplay": "A loop is used",
                    "expression": "!!__code__.match(/(for|while)\\s*\\(/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                }
            ],
            "title": "Loop from 1 to 5",
            "id": 2
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
            "description": "<p>Use a <em>for...of</em> loop to log all the words in this array to the console.</p><pre><code class=\"js\">var words = [ \"JavaScript\", \"for\", \"the\", \"win\" ];</code></pre>",
            "starterCode": "function printWords(words) {\n  // write code here\n}",
            "solution": "function printWords(words) {\n  for (const word of words) {\n    console.log(word);\n  }\n}",
            "testCases": [
                {
                    "description": "It logs all words to the console.",
                    "expression": "printWords([ \"JavaScript\", \"for\", \"the\", \"win\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "JavaScript"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "for"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "the"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "win"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "... No matter what's in the array.",
                    "expression": "printWords([ \"Everything\", \"is\", \"Awesome\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "Everything"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "is"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "Awesome"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It uses a for...of loop.",
                    "expressionDisplay": "for...of loop is used",
                    "expression": "!!__code__.match(/\\bfor\\s*\\([\\w\\s]+\\sof\\s/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a forEach loop.",
                    "expressionDisplay": "forEach loop is used",
                    "expression": "!!__code__.match(/\\bforEach\\b/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a for loop.",
                    "expressionDisplay": "for loop is used",
                    "expression": "!!__code__.match(/\\bfor\\s*\\([^)]*;/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                }
            ],
            "title": "for of words",
            "id": 45
        }, {
            "description": "<p>Use a <em>forEach</em> loop to log all the words in this array to the console.</p><pre><code class=\"js\">var words = [ \"JavaScript\", \"for\", \"the\", \"win\" ];</code></pre>",
            "starterCode": "function printWords(words) {\n  // write code here\n}",
            "solution": "function printWords(words) {\n  words.forEach(function(word) {\n    console.log(word);\n  });\n}",
            "testCases": [
                {
                    "description": "It logs all words to the console.",
                    "expression": "printWords([ \"JavaScript\", \"for\", \"the\", \"win\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "JavaScript"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "for"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "the"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "win"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "... No matter what's in the array.",
                    "expression": "printWords([ \"Everything\", \"is\", \"Awesome\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "Everything"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "is"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "Awesome"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It uses a forEach loop.",
                    "expressionDisplay": "forEach loop is used",
                    "expression": "!!__code__.match(/words\\s*\\.\\s*forEach\\s*\\(/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a for loop.",
                    "expressionDisplay": "for loop is used",
                    "expression": "!!__code__.match(/\\bfor\\b/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a for...of loop.",
                    "expressionDisplay": "It uses a for...of loop.",
                    "expression": "!!__code__.match(/\\bfor\\s*\\([\\w\\s]+\\sof\\s/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                }
            ],
            "title": "forEach word",
            "id": 4
        }, {
            "description": "<p>Use a <em>for</em> loop to log all the words in this array to the console.</p><pre><code class=\"js\">var words = [ \"JavaScript\", \"for\", \"the\", \"win\" ];</code></pre>",
            "starterCode": "function printWords(words) {\n  // write code here\n}",
            "solution": "function printWords(words) {\n  for (let i = 0; i < words.length; i++) {\n    console.log(words[i]);\n  }\n}",
            "testCases": [
                {
                    "description": "It logs all words to the console.",
                    "expression": "printWords([ \"JavaScript\", \"for\", \"the\", \"win\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "JavaScript"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "for"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "the"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "win"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "... No matter what's in the array.",
                    "expression": "printWords([ \"Everything\", \"is\", \"Awesome\" ])",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                "Everything"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "is"
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                "Awesome"
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It uses a for loop.",
                    "expressionDisplay": "for loop is used",
                    "expression": "!!__code__.match(/\\bfor\\s*\\(/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a for...of loop.",
                    "expressionDisplay": "for...of loop is used",
                    "expression": "!!__code__.match(/\\bfor\\s*\\([\\w\\s]+\\sof\\s/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                },
                {
                    "description": "Does NOT use a forEach loop.",
                    "expressionDisplay": "forEach loop is used",
                    "expression": "!!__code__.match(/\\bforEach\\b/)",
                    "skipCode": true,
                    "result": false,
                    "type": "result"
                }
            ],
            "title": "for each word",
            "id": 5
        }, {
            "testCases": [
                {
                    "expression": "numberOfLicks",
                    "result": 334,
                    "type": "result"
                },
                {
                    "expression": "!!__code__.match(/\\bwhile\\s*\\(/)",
                    "expressionDisplay": "while loop is used",
                    "description": "It uses a while loop.",
                    "result": true,
                    "type": "result"
                },
                {
                    "description": "It does NOT use a for loop.",
                    "expressionDisplay": "for loop is used",
                    "expression": "!!__code__.match(/\\bfor\\s*\\(/)",
                    "result": false,
                    "type": "result"
                }
            ],
            "description": "<p>How many licks does it take to get to the tootsie roll center of a tootsie pop?</p>\n\n<p>Write a while loop that keeps licking (removing <em>3</em> diameter from) the pop until the pop is gone (diameter is not greater than zero). Additionally keep track of how many licks you've taken. The code sample starts out with 2 variables at the beginning. Use those to keep track progress.</p>\n\n<p>You do not need to console.log anything. The tests just check that the numberOfLicks variable is right at the end.</p>",
            "starterCode": "let diameter = 1000;\nlet numberOfLicks = 0;\n\n// Write code here.",
            "solution": "let diameter = 1000;\nlet numberOfLicks = 0;\n\nwhile (diameter > 0) {\n  diameter -= 3;\n  numberOfLicks++;\n}",
            "id": 23,
            "title": "While Loop"
        }, {
            "description": "<p>Write a loop to add one to all the numbers in this array.</p><pre><code class='js'>var numbers = [ 3, 21, 8 ];</code></pre><p>After your loop runs, the array will contain <code>[ 4, 22, 9 ]</code>. You will be modifying each of the numbers in the array.</p>",
            "starterCode": "function incrementNumbers(numbers) {\n  // write code here.\n}",
            "solution": "function incrementNumbers(numbers) {\n  for (let i = 0; i < numbers.length; i++) {\n    numbers[i]++;\n  }\n}",
            "testCases": [
                {
                    "expression": "let numbers = [ 3, 21, 8 ];\nincrementNumbers(numbers);\nnumbers;",
                    "result": [
                        4,
                        22,
                        9
                    ],
                    "type": "result"
                },
                {
                    "expression": "let numbers = [ 1, 2, 3 ];\nincrementNumbers(numbers);\nnumbers;",
                    "result": [
                        2,
                        3,
                        4
                    ],
                    "type": "result"
                },
                {
                    "expression": "let numbers = [ -2, -1, 0 ];\nincrementNumbers(numbers);\nnumbers;",
                    "result": [
                        -1,
                        0,
                        1
                    ],
                    "type": "result"
                },
                {
                    "expression": "let numbers = [ 100 ];\nincrementNumbers(numbers);\nnumbers;",
                    "result": [
                        101
                    ],
                    "type": "result"
                },
                {
                    "expression": "let numbers = [];\nincrementNumbers(numbers);\nnumbers;",
                    "result": [],
                    "type": "result"
                }
            ],
            "title": "Increment Array Values",
            "id": 6
        }, {
            title: "Add Function",
            description: '<p>Write a function named <code>add</code> that takes two inputs (number1 and number2) and outputs the sum of those numbers.</p><p>"output" here does NOT mean console.log. This is the function giving an answer back.</p>',
            starterCode: "",
            solution: "function add(number1, number2) {\n  return number1 + number2;\n}",
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
            "description": "<p>Call the <code>add</code> function with inputs 2 and 4. Store the result in a variable named <code>total</code>.</p>",
            "starterCode": "function add(num1, num2) {\n  return num1 + num2;\n}\n\n// Write code here.",
            "solution": "function add(num1, num2) {\n  return num1 + num2;\n}\n\nlet total = add(2, 4);",
            "testCases": [
                {
                    "description": "It stores the result in a variable named total.",
                    "expression": "total",
                    "result": 6,
                    "type": "result"
                },
                {
                    "description": "It calls the function once.",
                    "expressionDisplay": "Number of function calls",
                    "expression": "__code__.match(/add\\([^\\)]*\\)/g).length - 1",
                    "skipCode": true,
                    "result": 1,
                    "type": "result"
                },
                {
                    "description": "It calls the function with inputs 2 and 4.",
                    "expressionDisplay": "Called with inputs 2 and 4",
                    "expression": "!!__code__.match(/add\\(\\s*2\\s*,\\s*4\\s*\\)/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                }
            ],
            "id": 8,
            "title": "Function Result to Variable"
        }, {
            title: "Function Result to Console",
            description: "<p>Call the <code>add</code> function with inputs 7 and 19. Log the answer to the console.</p>",
            starterCode: "function add(num1, num2) {\n  return num1 + num2;\n}\n\n// Write code here.",
            solution: "function add(num1, num2) {\n  return num1 + num2;\n}\n\nconsole.log( add(7, 19) );",
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
