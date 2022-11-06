angular.module("jsExercises")
.value("challengeData", {
    "_sets": [{
        id: 1,
        key: "basic",
        title: "Basic Structures",
        description: "<p>Practice the fundamental JavaScript structures such as loops, conditionals and functions.</p>"
    }, {
        id: 2,
        key: "other",
        title: "Other Challenges",
        description: "<p>All other available code challenges beyond Basic Structures. Generally, the first ones are easier and the last harder.</p>"
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
        }, 
        {
            "description": "<p>Write a <em>for</em> loop to log the 10s from 10 through 100 to the console.</p>",
            "starterCode": "",
            "solution": "for (let i = 10; i <= 100; i += 10) {\n  console.log(i);\n}",
            "testCases": [
                {
                    "description": "It logs 10s to the console.",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                10
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                20
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                30
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                40
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                50
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                60
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                70
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                80
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                90
                            ]
                        },
                        {
                            "level": "log",
                            "values": [
                                100
                            ]
                        }
                    ],
                    "expressionDisplay": "",
                    "type": "console"
                },
                {
                    "description": "It uses a for loop.",
                    "expressionDisplay": "A for loop is used",
                    "expression": "!!__code__.match(/(for)\\s*\\(/)",
                    "skipCode": true,
                    "result": true,
                    "type": "result"
                }
            ],
            "title": "Count by 10",
            "id": 39
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
        },
        {
            "testCases": [
                {
                    "description": "It logs the answer to the console.",
                    "expressionDisplay": "",
                    "console": [
                        {
                            "level": "log",
                            "values": [
                                3
                            ]
                        }
                    ],
                    "type": "console"
                },
                {
                    "description": "It calls the method once.",
                    "expressionDisplay": "Number of function calls",
                    "expression": "(__code__.match(/calculator\\s*\\.\\s*subtract\\s*\\([^\\)]*\\)/g) || []).length",
                    "skipCode": true,
                    "result": 1,
                    "type": "result"
                },
                {
                    "description": "It calls the method with inputs 5 and 2.",
                    "expressionDisplay": "Called with inputs 5 and 2",
                    "skipCode": true,
                    "expression": "!!__code__.match(/calculator\\s*\\.\\s*subtract\\s*\\(\\s*5\\s*,\\s*2\\s*\\)/)",
                    "result": true,
                    "type": "result"
                }
            ],
            "starterCode": "let calculator = {\n  subtract: function(a, b) {\n    return a - b;\n  }\n};\n\n// Write code only below",
            "solution": "let calculator = {\n  subtract: function(a, b) {\n    return a - b;\n  }\n};\n\n// Write code only below\nlet x = calculator.subtract(5, 2);\nconsole.log(x);",
            "description": "<p>Call the <code>subtract</code> method of <code>calculator</code> with inputs 5 and 2. Log the answer to the console.</p>",
            "title": "Call a method",
            "id": 28
        }]
    },
    "other": {
        title: "Other Challenges",
        challenges: [
            {
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "printLongerName(\"Ada Lovelace\", \"Charles\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longer name."
                                ]
                            }
                        ],
                        "description": "First name is longer",
                        "type": "console"
                    },
                    {
                        "description": "Second name is longer",
                        "expression": "printLongerName(\"Ada Lovelace\", \"Charles Babbage\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Charles Babbage has the longer name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "Names are the same length",
                        "expression": "printLongerName(\"Ada Lovelace\", \"Brendan Eich\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "The names are the same length."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Start with two variables <code>name1</code> and <code>name2</code> which hold two names.</p>\n<p>The code should output the longer of the two names. e.g. <code>\"Ada Lovelace has the longer name.\"</code></p>",
                "starterCode": "function printLongerName(name1, name2) {\n  // Write code here.\n  \n}",
                "solution": "function printLongerName(name1, name2) {\n  if (name1.length === name2.length) {\n    console.log(\"The names are the same length.\");\n  } else if (name1.length > name2.length) {\n    console.log(name1 + \" has the longer name.\");\n  } else {\n    console.log(name2 + \" has the longer name.\");\n  }\n}",
                "title": "Longer Name",
                "id": 13
            },
            {
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles B.\", \"Brendan\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "description": "First name is longer",
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles\", \"Brendan E.\")",
                        "description": "First name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "Second name is longer",
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles Babbage\", \"Brendan\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Charles Babbage has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada\", \"Charles Babbage\", \"Brendan\")",
                        "description": "Second name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Charles Babbage has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "Third name is longer",
                        "expression": "printLongestName(\"Ada\", \"Charles\", \"Brendan Eich\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Brendan Eich has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles\", \"John von Neumann\")",
                        "description": "Third name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "John von Neumann has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Start with three variables <code>name1</code>, <code>name2</code>, and <code>name3</code> which hold three names.</p>\n<p>The code should output the longest of the three names. e.g. <code>\"Ada Lovelace has the longest name.\"</code>. Assume there will not be a tie.</p>",
                "starterCode": "function printLongestName(name1, name2, name3) {\n  // Write code here.\n  \n}",
                "solution": "function printLongestName(name1, name2, name3) {\n  if (name1.length > name2.length) {\n    if (name1.length > name3.length) {\n      console.log(name1 + \" has the longest name.\");\n    } else {\n      console.log(name3 + \" has the longest name.\");\n    }\n  } else {\n    if (name2.length > name3.length) {\n      console.log(name2 + \" has the longest name.\");\n    } else {\n      console.log(name3 + \" has the longest name.\");\n    }\n  }\n}",
                "title": "Longer Name (of Three)",
                "id": 38
            },
            {
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles B.\", \"Brendan\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "description": "First name is longer",
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles\", \"Brendan E.\")",
                        "description": "First name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "Second name is longer",
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles Babbage\", \"Brendan\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Charles Babbage has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada\", \"Charles Babbage\", \"Brendan\")",
                        "description": "Second name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Charles Babbage has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "Third name is longer",
                        "expression": "printLongestName(\"Ada\", \"Charles\", \"Brendan Eich\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Brendan Eich has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada Lovelace\", \"Charles\", \"John von Neumann\")",
                        "description": "Third name is longer",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "John von Neumann has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "1st and 2nd tie",
                        "expression": "printLongestName(\"Brendan\", \"Charles\", \"Ada\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Brendan and Charles tie for the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "1st and 3rd tie",
                        "expression": "printLongestName(\"Brendan\", \"Ada\", \"Charles\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Brendan and Charles tie for the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "2nd and 3rd tie",
                        "expression": "printLongestName(\"Ada\", \"Brendan\", \"Charles\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Brendan and Charles tie for the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "All three tie",
                        "expression": "printLongestName(\"Dorothy\", \"Brendan\", \"Charles\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "All three names, Dorothy, Brendan, and Charles, are the same length."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "1st and 2nd tie, but not longest",
                        "expression": "printLongestName(\"Brendan\", \"Charles\", \"Ada Lovelace\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "1st and 3rd tie, but not longest",
                        "expression": "printLongestName(\"Brendan\", \"Ada Lovelace\", \"Charles\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "printLongestName(\"Ada Lovelace\", \"Brendan\", \"Charles\")",
                        "description": "2nd and 3rd tie,  but not longest",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Ada Lovelace has the longest name."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Start with three variables <code>name1</code>, <code>name2</code>, and <code>name3</code> which hold three names.</p>\n<p>The code should output the longest of the three names. e.g. <code>\"Ada Lovelace has the longest name.\"</code>. If there is a tie between any two, list both. e.g. <code>\"Charles and Brendan tie for the longest name.\"</code>. Or if all three names are the same length, output <code>\"All three names, Dorothy, Charles, and Brendan, are the same length.\"</code></p>",
                "starterCode": "function printLongestName(name1, name2, name3) {\n  // Write code here.\n  \n}",
                "solution": "function printLongestName(name1, name2, name3) {\n  if (name1.length === name2.length && name2.length === name3.length) {\n    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);\n  } else if (name1.length > name2.length) {\n    if (name1.length === name3.length) {\n      console.log(`${name1} and ${name3} tie for the longest name.`);\n    } else if (name1.length > name3.length) {\n      console.log(name1 + \" has the longest name.\");\n    } else {\n      console.log(name3 + \" has the longest name.\");\n    }\n  } else if (name1.length > name3.length) {\n    if (name1.length === name2.length) {\n      console.log(`${name1} and ${name2} tie for the longest name.`);\n    } else {\n      console.log(name2 + \" has the longest name.\");\n    }\n  } else {\n    if (name2.length === name3.length) {\n      console.log(`${name2} and ${name3} tie for the longest name.`);\n    } else if (name2.length > name3.length) {\n      console.log(name2 + \" has the longest name.\");\n    } else {\n      console.log(name3 + \" has the longest name.\");\n    }\n  }\n}",
                "title": "Longer Name (of Three, with Ties)",
                "id": 43
            },
            {
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "convert(32)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "32 F is 0 C."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expressionDisplay": "",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "212 F is 100 C."
                                ]
                            }
                        ],
                        "expression": "convert(212)",
                        "type": "console"
                    },
                    {
                        "expression": "convert(68)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "68 F is 20 C."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "convert(-40)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "-40 F is -40 C."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>The variable <code>tempFahrenheit</code> is already defined for you and different values are given to it. Use that variable to convert that temperature to Celsius. Print the Celsius value to the console.</p>\n<p>For example, print, \"32 degrees Fahrenheit is 0 degrees Celsius\".</p>",
                "starterCode": "function convert(tempFahrenheit) {\n  // write code here\n\n}",
                "solution": "function convert(tempFahrenheit) {\n  // write code here\n  const tempCelsius = (tempFahrenheit - 32) * 5 / 9;\n  console.log(tempFahrenheit + \" F is \" + tempCelsius + \" C.\");\n}",
                "title": "Temp Converter",
                "id": 12
            },{
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "testTemperature(72, 80)",
                        "description": "Too Hot!",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Run A/C"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "testTemperature(72, 65)",
                        "description": "Too Cold!",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Run heat"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "testTemperature(72, 72)",
                        "description": "Just Right!",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Stand by"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "testTemperature(60, 65)",
                        "description": "Turn down the thermostat.",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Run A/C"
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Given an <code>actualTemp</code> and a <code>desiredTemp</code>, tell the heating &amp; cooling system what to do. Log one of these three things:</p>\n<ul>\n  <li>Run A/C</li>\n  <li>Run heat</li>\n  <li>Stand by</li>\n</ul>",
                "starterCode": "function testTemperature(desiredTemp, actualTemp) {\n  // Write code here.\n  \n}",
                "solution": "function testTemperature(desiredTemp, actualTemp) {\n  if (actualTemp < desiredTemp) {\n    console.log(\"Run heat\");\n  } else if (actualTemp > desiredTemp) {\n    console.log(\"Run A/C\");\n  } else {\n    console.log(\"Stand by\");\n  }\n}",
                "title": "Heating and Cooling",
                "id": 15
            },{
                "testCases": [
                    {
                        "expression": "/something comfy/.test(whatToWear(33, \"casual\"))",
                        "result": true,
                        "expressionDisplay": "suggests something comfy",
                        "description": "For a casual event",
                        "type": "result"
                    },
                    {
                        "description": "For a semi-formal event",
                        "expressionDisplay": "suggests a polo",
                        "expression": "/a polo/.test(whatToWear(33, \"semi-formal\"))",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "/a suit/.test(whatToWear(33, \"formal\"))",
                        "expressionDisplay": "suggests a suit",
                        "description": "For a formal event",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "description": "For less than 54 degrees",
                        "expressionDisplay": "suggests a coat",
                        "expression": "/a coat/.test(whatToWear(53, \"formal\"))",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "description": "For 54 degrees",
                        "expressionDisplay": "suggests a jacket",
                        "expression": "/a jacket/.test(whatToWear(54, \"formal\"))",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "description": "For 70 degrees",
                        "expressionDisplay": "suggests a jacket",
                        "expression": "/a jacket/.test(whatToWear(70, \"formal\"))",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "description": "For more than 70 degrees",
                        "expressionDisplay": "suggests no jacket",
                        "expression": "/no jacket/.test(whatToWear(71, \"formal\"))",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expressionDisplay": "",
                        "expression": "whatToWear(33, \"formal\")",
                        "description": "It returns a complete sentence.",
                        "result": "Since it's 33 degrees and you're going to a formal event, you should wear a suit and a coat.",
                        "type": "result"
                    }
                ],
                "description": "<p>Define a function named <code>whatToWear</code>. It takes two parameters: <code>temperature</code> and <code>eventType</code> (in that order).</p>\n<p>The function should <em>return</em> a sentence suggesting what to wear according to the following rules:</p>\n\n<table class=\"table\">\n<thead>\n<tr>\n<th>Event type</th>\n<th>suggestion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>casual</td>\n<td>\"something comfy\"</td>\n</tr>\n<tr>\n<td>semi-formal</td>\n<td>\"a polo\"</td>\n</tr>\n<tr>\n<td>formal</td>\n<td>\"a suit\"</td>\n</tr>\n</tbody>\n</table>\n<table class=\"table\">\n<thead>\n<tr>\n<th>Temperature</th>\n<th>suggestion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Less than 54 degrees</td>\n<td>\"a coat\"</td>\n</tr>\n<tr>\n<td>54 - 70 degrees</td>\n<td>\"a jacket\"</td>\n</tr>\n<tr>\n<td>more than 70 degrees</td>\n<td>\"no jacket\"</td>\n</tr>\n</tbody>\n</table>\n<p>For example, with temperature <code>\"Since it's 33 degrees and you're going to a formal event, you should wear a suit and a coat.\"</code></p>",
                "solution": "function whatToWear(temperature, eventType) {\n  let tempSuggestion, eventSuggestion;\n  if (eventType === \"casual\") {\n    eventSuggestion = \"something comfy\";\n  } else if (eventType === \"formal\") {\n    eventSuggestion = \"a suit\";\n  } else {\n    eventSuggestion = \"a polo\";\n  }\n\n  if (temperature < 54) {\n    tempSuggestion = \"a coat\";\n  } else if (temperature<= 70) {\n    tempSuggestion = \"a jacket\";\n  } else {\n    tempSuggestion = \"no jacket\";\n  }\n\n  return `Since it's ${temperature} degrees and you're going to a ${eventType} event, you should wear ${eventSuggestion} and ${tempSuggestion}.`;\n}",
                "starterCode": "",
                "title": "What to Wear",
                "id": 19
            },{
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "expression": "renderChange(0)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(3)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "3 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(7)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "2 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(14)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "4 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(15)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(24)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "0 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "2 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "4 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(36)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "1 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "1 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "renderChange(100)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "4 quarters"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 dimes"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 nickels"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "0 pennies"
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "Given a number of cents, log the optimal numbers of quarters, dimes, nickels and pennies to make up that amount with the fewest coins.",
                "solution": "function renderChange(cents) {\n  var quarters = Math.floor(cents / 25);\n  cents -= 25 * quarters;\n\n  var dimes = Math.floor(cents / 10);\n  cents -= 10 * dimes;\n\n  var nickels = Math.floor(cents / 5);\n  cents -= 5 * nickels;\n\n  var pennies = cents;\n\n  console.log(quarters + \" quarters\");\n  console.log(   dimes + \" dimes\");\n  console.log( nickels + \" nickels\");\n  console.log( pennies + \" pennies\");\n}",
                "starterCode": "function renderChange(cents) {\n  // Write code here.\n}",
                "title": "Coins (Console)",
                "id": 37
            },{
                "testCases": [
                    {
                        "description": "Divisible by 3 is Fizz",
                        "expression": "getOutputForNumber(3)",
                        "result": "Fizz",
                        "type": "result"
                    },
                    {
                        "description": "Divisible by 3 is Fizz",
                        "expression": "getOutputForNumber(9)",
                        "result": "Fizz",
                        "type": "result"
                    },
                    {
                        "description": "Divisible by 5 is Buzz",
                        "expression": "getOutputForNumber(5)",
                        "result": "Buzz",
                        "type": "result"
                    },
                    {
                        "description": "Divisible by 5 is Buzz",
                        "expression": "getOutputForNumber(10)",
                        "result": "Buzz",
                        "type": "result"
                    },
                    {
                        "expression": "getOutputForNumber(15)",
                        "description": "Divisible by 3 and 5 is FizzBuzz",
                        "result": "FizzBuzz",
                        "type": "result"
                    },
                    {
                        "description": "Not divisible by either just the number",
                        "expression": "getOutputForNumber(1)",
                        "result": 1,
                        "type": "result"
                    },
                    {
                        "description": "Not divisible by either just the number",
                        "expression": "getOutputForNumber(7)",
                        "result": 7,
                        "type": "result"
                    },
                    {
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
                                    "Fizz"
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
                                    "Buzz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    7
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    8
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Buzz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    11
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    13
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    14
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "FizzBuzz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    16
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    17
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    19
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Buzz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    22
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    23
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Buzz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    26
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Fizz"
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    28
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    29
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "FizzBuzz"
                                ]
                            }
                        ],
                        "description": "It loops from 1 to 30.",
                        "type": "console"
                    }
                ],
                "description": "<p>List integers 1-30. Numbers divisible by 3 should be replaced with the word \"Fizz\", those divisible by 5 replaced by the word \"Buzz\", and those divisible by both 3 and 5 replaced with the word \"FizzBuzz\".</p>",
                "starterCode": "function getOutputForNumber(number) {\n  // Write logic for numbers here.\n}\n\n// Fix this loop.\nfor (var num = 0; num < 1; num++) {\n   console.log( getOutputForNumber(num) );\n}",
                "solution": "function getOutputForNumber(number) {\n  var result = \"\";\n  if (number % 3 === 0) {\n    result += \"Fizz\";\n  }\n  if (number % 5 === 0) {\n    result += \"Buzz\";\n  }\n  if (!result) {\n    result = number;\n  }\n  return result;\n}\n\n// Loop fixed.\nfor (var num = 1; num <= 30; num++) {\n   console.log( getOutputForNumber(num) );\n}",
                "title": "FizzBuzz",
                "id": 35
            },{
                "testCases": [
                    {
                        "expression": "capitalize(\"paris\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Paris"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "capitalize(\"what a fine day\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "What a fine day"
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "capitalize(\"AMAZING\")",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "AMAZING"
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Given a string, capitalize the first letter and log the result.</p>",
                "starterCode": "function capitalize(string) {\n  // Write code here.\n\n}",
                "solution": "function capitalize(string) {\n  // Write code here.\n  var firstLetter = string.charAt(0);\n  var remainingLetters = string.substring(1);\n  console.log(firstLetter.toUpperCase() + remainingLetters);\n}",
                "title": "Capitalize",
                "id": 34
            },{
                "testCases": [
                    {
                        "expression": "averageArray([1])",
                        "result": 1,
                        "type": "result"
                    },
                    {
                        "expression": "averageArray([5, 7])",
                        "result": 6,
                        "type": "result"
                    },
                    {
                        "expression": "averageArray([10, 20, 30])",
                        "result": 20,
                        "type": "result"
                    },
                    {
                        "expression": "averageArray([ 2, 4, 6, 0, 1 ])",
                        "result": 2.6,
                        "type": "result"
                    }
                ],
                "description": "<p>Given an array of numbers (in a variable named <code>numbers</code>), return the average.</p>",
                "starterCode": "function averageArray(numbers) {\n  // Write code here.\n\n}",
                "solution": "function averageArray(numbers) {\n  let sum = 0;\n  for (const num of numbers) {\n    sum += num;\n  }\n  return sum / numbers.length;\n}",
                "title": "Find Average",
                "id": 46
            },{
                "testCases": [
                    {
                        "expression": "square(2)",
                        "result": 4,
                        "type": "result"
                    },
                    {
                        "expression": "square(7)",
                        "result": 49,
                        "type": "result"
                    },
                    {
                        "expression": "squareRoot(4)",
                        "result": 2,
                        "type": "result"
                    },
                    {
                        "expression": "squareRoot(100)",
                        "result": 10,
                        "type": "result"
                    },
                    {
                        "expression": "findHypotenuse(3, 4)",
                        "result": 5,
                        "type": "result"
                    },
                    {
                        "expression": "findHypotenuse(5, 12)",
                        "result": 13,
                        "type": "result"
                    },
                    {
                        "expression": "__code__.match(/square\\([^\\)]*\\)/g).length - 1",
                        "expressionDisplay": "number of times square is called",
                        "description": "square is called twice in findHypotenuse",
                        "result": 2,
                        "type": "result"
                    },
                    {
                        "expression": "__code__.match(/squareRoot\\([^\\)]*\\)/g).length - 1",
                        "description": "squareRoot is called once in findHypotenuse",
                        "expressionDisplay": "number of times squareRoot is called",
                        "result": 1,
                        "type": "result"
                    }
                ],
                "description": "<p>Write a function named <code>findHypotenuse</code> that calculates the length of the hypotenuse of a right triangle given the lengths of the other two sides. The lengths of the sides should be specified as parameters. The hypotenuse should be returned from the function.</p>\n\n<p>Pythagorean Theorem: hypotenuse = square root of ( one side squared + other side squared ).</p>\n\n<p>But there's an additional stipulation. You must create two other helper functions and call them inside of <code>findHypotenuse</code>. </p>\n<ul>\n  <li><code>square</code> is a function that returns the square of a number. (This is called twice in <code>findHypotenuse</code>.)</li>\n  <li><code>squareRoot</code> is a function that returns the square root of a number. (This is called once in <code>findHypotenuse</code>.)</li>\n</ul>",
                "solution": "function findHypotenuse(side1, side2) {\n  return squareRoot( square(side1) + square(side2) );\n}\n\nfunction square(num) {\n  return num * num;\n}\n\nfunction squareRoot(num) {\n  return Math.sqrt(num);\n}",
                "starterCode": "",
                "title": "Pythagoras  a la Functions",
                "id": 22
            }, {
                "testCases": [
                    {
                        "expression": "findFirstVowelPosition(\"and\")",
                        "result": 0,
                        "type": "result"
                    },
                    {
                        "expression": "findFirstVowelPosition(\"sand\")",
                        "result": 1,
                        "type": "result"
                    },
                    {
                        "expression": "findFirstVowelPosition(\"brand\")",
                        "result": 2,
                        "type": "result"
                    },
                    {
                        "expression": "findFirstVowelPosition(\"weather\")",
                        "result": 1,
                        "type": "result"
                    },
                    {
                        "expression": "translateToPigLatin(\"and\")",
                        "result": "andway",
                        "type": "result"
                    },
                    {
                        "expression": "translateToPigLatin(\"sand\")",
                        "result": "andsay",
                        "type": "result"
                    },
                    {
                        "expression": "translateToPigLatin(\"brand\")",
                        "result": "andbray",
                        "type": "result"
                    },
                    {
                        "expression": "translateToPigLatin(\"weather\")",
                        "result": "eatherway",
                        "type": "result"
                    }
                ],
                "starterCode": "// returns the given english word translated to pig latin.\nfunction translateToPigLatin(englishWord) {\n  // Then add code here...\n  // If a word starts with a vowel, just add “way” onto the ending.\n  // If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word.  \n}\n\n// returns the index of the first vowel in the word (0 is the first index)\nfunction findFirstVowelPosition(word) {\n  // Add code here first.\n}\n\n// returns true if letter is a vowel, false otherwise.\nfunction isVowel(letter) {\n  // Don't change this. It works correctly.\n  return \"aeiou\".indexOf(letter) !== -1;\n}",
                "solution": "// returns the given english word translated to pig latin.\nfunction translateToPigLatin(englishWord) {\n  var firstVowelPos = findFirstVowelPosition(englishWord);\n  if (firstVowelPos === 0) {\n    // If a word starts with a vowel, just add “way” onto the ending.\n    return englishWord + \"way\";\n  } else {\n    // If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word.\n    var flippedWord = englishWord.substring(firstVowelPos) + englishWord.substring(0, firstVowelPos);\n    return flippedWord + \"ay\";\n  }\n}\n\n// returns the index of the first vowel in the word (0 is the first index)\nfunction findFirstVowelPosition(word) {\n  for (var i = 0; i < word.length; i++) {\n    var letter = word[i];\n    if (isVowel(letter)) {\n      return i;\n    }\n  }\n  return -1;\n}\n\n// returns true if letter is a vowel, false otherwise.\nfunction isVowel(letter) {\n  return \"aeiou\".indexOf(letter) !== -1;\n}",
                "description": "<p>Complete the code in the <code>findFirstVowelPosition</code> function and then the <code>translateToPigLatin</code> function to make a Pig Latin. Some of the test cases are only for the <code>findFirstVowelPosition</code> function. Get that working first before you start the <code>translateToPigLatin</code> function. <code>findFirstVowelPosition</code> should be useful inside your <code>translateToPigLatin</code> function.</p>\n\n<p>There are just two simple rules. You can assume every word is all lowercase already.</p>\n\n<ol>\n<li>If a word starts with a vowel, just add “way” onto the ending.</li>\n<li>If a word starts with a consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay” to the end of the word.</li>\n</ol>",
                "title": "Pig Latin (with Starter)",
                "id": 21
            },{
                "testCases": [
                    {
                        "description": "If name is empty, log a message.",
                        "expression": "validate(\"\", 1)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Name is required."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "validate(\"s\", 1)",
                        "description": "If name is too short, log a message.",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Name must be at least two characters."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "If name is long enough, no message.",
                        "expression": "validate(\"Bo\", 1)",
                        "console": [],
                        "type": "console"
                    },
                    {
                        "description": "If age is null, log a message.",
                        "expression": "validate(\"Grant\", null)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Age is required."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "If age is negative, log a message.",
                        "expression": "validate(\"Grant\", -1)",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Age must not be negative."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "If age is positive, no message.",
                        "expression": "validate(\"Grant\", 1)",
                        "console": [],
                        "type": "console"
                    },
                    {
                        "description": "If age is zero, no message.",
                        "expression": "validate(\"Grant\", 0)",
                        "console": [],
                        "type": "console"
                    },
                    {
                        "expression": "validate(\"I\", null)",
                        "description": "Logs two messages if name and age are erroneous.",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "Name must be at least two characters."
                                ]
                            },
                            {
                                "level": "log",
                                "values": [
                                    "Age is required."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Start with the two variables provided: <code>name</code> and <code>age</code>.</p>\n<ul>\n  <li>Log an error message if name is not specified or is not at least 2 characters long.</li>\n  <li>Log an error message if age is not a number or if it is less than zero.</li>\n</ul>",
                "starterCode": "function validate(name, age) {\n  // Write code here.\n\n}",
                "solution": "function validate(name, age) {\n  let valid = true;\n  if (!name) {\n    console.log(\"Name is required.\");\n    valid = false;\n  } else if (name.length < 2) {\n    console.log(\"Name must be at least two characters.\");\n    valid = false;\n  }\n  if (typeof age !== \"number\") {\n    console.log(\"Age is required.\");\n    valid = false;\n  } else if (age < 0) {\n    console.log(\"Age must not be negative.\");\n    valid = false;\n  }\n  return valid;\n}",
                "title": "Validate Input",
                "id": 14
            },{
                "testCases": [
                    {
                        "expression": "sumArray([1])",
                        "result": 1,
                        "type": "result"
                    },
                    {
                        "expression": "sumArray([5, 7])",
                        "result": 12,
                        "type": "result"
                    },
                    {
                        "expression": "sumArray([10, 20, 30])",
                        "result": 60,
                        "type": "result"
                    },
                    {
                        "expression": "sumArray([ 1, 1, 2, 3, 5, 8 ])",
                        "result": 20,
                        "type": "result"
                    },
                    {
                        "expression": "sumArray([])",
                        "description": "Return 0 for empty array.",
                        "result": 0,
                        "type": "result"
                    }
                ],
                "description": "<p>Given an array of numbers (in a variable named <code>numbers</code>), add them all together and return the sum.</p>",
                "starterCode": "function sumArray(numbers) {\n  // Write code here.\n\n}",
                "solution": "function sumArray(numbers) {\n  let sum = 0;\n  for (const num of numbers) {\n    sum += num;\n  }\n  return sum;\n}",
                "title": "Sum the Numbers",
                "id": 16
            },
            {
                "testCases": [
                    {
                        "expression": "findMax([4])",
                        "result": 4,
                        "type": "result"
                    },
                    {
                        "expression": "findMax([4, 5, 6])",
                        "result": 6,
                        "type": "result"
                    },
                    {
                        "expression": "findMax([10, 9, 8])",
                        "result": 10,
                        "type": "result"
                    },
                    {
                        "expression": "findMax([2, 4, 6, 0, 1])",
                        "result": 6,
                        "type": "result"
                    },
                    {
                        "expression": "findMax([])",
                        "description": "For empty array, return undefined.",
                        "type": "result"
                    }
                ],
                "description": "<p>Given an array of numbers (in a variable named <code>numbers</code>), find and return the largest number.</p>",
                "starterCode": "function findMax(numbers) {\n  // Write code here.\n  \n}",
                "solution": "function findMax(numbers) {\n  let max = numbers[0];\n  for (const num of numbers) {\n    if (num > max) {\n      max = num;\n    }\n  }\n  return max;\n}",
                "title": "Find Max",
                "id": 17
            },{
                "testCases": [
                    {
                        "expression": "isPalindrome(\"a\")",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"oo\")",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"me\")",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"dad\")",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"pet\")",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"toot\")",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"tool\")",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"tilt\")",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"racecar\")",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPalindrome(\"demoed\")",
                        "result": false,
                        "type": "result"
                    }
                ],
                "solution": "function isPalindrome(string) {\n  var middle = string.length / 2;\n  for (var i = 0; i < middle; i++) {\n    var oppositeEnd = string.length - 1 - i;\n    if (string[i] !== string[oppositeEnd]) {\n      return false;\n    }\n  }\n  return true;\n}",
                "description": "<p>Write a function named <code>isPalindrome</code> that takes a string parameter and returns true if it is a palindrome and false if it is not.</p>",
                "starterCode": "",
                "title": "Is Palindrome",
                "id": 42
            },{
                "testCases": [
                    {
                        "expression": "isPrime(2)",
                        "result": true,
                        "description": "Prime Numbers",
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(3)",
                        "result": true,
                        "description": "",
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(7)",
                        "result": true,
                        "description": "",
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(31)",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(199)",
                        "result": true,
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(4)",
                        "result": false,
                        "description": "Not Prime Numbers",
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(6)",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(9)",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(25)",
                        "result": false,
                        "type": "result"
                    },
                    {
                        "expression": "isPrime(49)",
                        "result": false,
                        "type": "result"
                    }
                ],
                "description": "<p>Create a function named <code>isPrime</code> that takes one number in. The function must return <code>true</code> for any prime number and <code>false</code> for other numbers.</p>\n<p>A prime number is defined as any number greater than one which is only evenly divisible by 1 and itself. No other numbers can divide into it evenly.</p>",
                "solution": "function isPrime(num) {\n  // This is not the most efficient solution, but it might be the simplest.\n  // Try every number less than the number.\n  for (var i = 2; i < num; i++) {\n    // If any of them divide evenly, it's not prime.\n    if (num % i === 0) {\n      return false;\n    }\n  }\n  // The loop finished without finding any factors. It must be prime.\n  return true;\n}",
                "starterCode": "",
                "title": "Is Prime",
                "id": 40
            },{
                "testCases": [
                    {
                        "expression": "determineDutyStatus([ 100, 250, 300, 300 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "You must pay duty."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "determineDutyStatus([ 80, 95, 100, 500 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "No duty required."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expressionDisplay": "",
                        "expression": "determineDutyStatus([ 1000, 20, 10 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "You must pay duty."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "determineDutyStatus([ 400, 400 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "No duty required."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "determineDutyStatus([ 5 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "No duty required."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "determineDutyStatus([ 900 ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "You must pay duty."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "expression": "determineDutyStatus([ ])",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "No duty required."
                                ]
                            }
                        ],
                        "description": "No items",
                        "type": "console"
                    }
                ],
                "description": "<p>People traveling outside the U.S. are generally allowed to bring back up to $800 of merchandise without paying a duty tax. Given an array of the prices of all the items a person has bought on their trip abroad, determine whether or not they need to pay duty.</p>\n<p><em>Log</em> either <code>\"You must pay duty.\"</code> or <code>\"No duty required.\"</code>.</p>",
                "starterCode": "function determineDutyStatus(pricesOfItems) {\n  // Write code here.\n  \n}",
                "solution": "function determineDutyStatus(pricesOfItems) {\n  let total = 0;\n  for (const price of pricesOfItems) {\n    total += price;\n  }\n  \n  if (total > 800) {\n    console.log(\"You must pay duty.\");\n  } else {\n    console.log(\"No duty required.\");\n  }\n}",
                "title": "Duty-Free",
                "id": 18
            },{
                "testCases": [
                    {
                        "expressionDisplay": "",
                        "description": "Asian Mountains",
                        "expression": "var mountains = [ {name: \"Everest\",       height: 29029},\n                  {name: \"K2\",            height: 28251},\n                  {name: \"Annapurna\",     height: 24787},\n                  {name: \"Kangchenjunga\", height: 28169},\n                  {name: \"Lhotse\",        height: 27940} ];\nfindHighest(mountains);",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "The highest mountain is Everest at 29029 ft."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "African Mountains",
                        "expressionDisplay": "",
                        "expression": "var mountains = [ {name: \"Kenya\",       height: 17057},\n                  {name: \"Ngaliema\",    height: 16762},\n                  {name: \"Kilimanjaro\", height: 19341} ];\nfindHighest(mountains);",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "The highest mountain is Kilimanjaro at 19341 ft."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "North American Mountains",
                        "expressionDisplay": "",
                        "expression": "var mountains = [ {name: \"Whitney\",    height: 14505},\n                  {name: \"Logan\",      height: 19551},\n                  {name: \"Denali\",     height: 20310},\n                  {name: \"Longs Peak\", height: 14259} ];\nfindHighest(mountains);",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "The highest mountain is Denali at 20310 ft."
                                ]
                            }
                        ],
                        "type": "console"
                    },
                    {
                        "description": "World Mountains",
                        "expression": "var mountains = [ {name: \"Kilimanjaro\", height: 19341, continent: \"Africa\"},\n                  {name: \"Everest\",     height: 29029, continent: \"Asia\"},\n                  {name: \"Denali\",      height: 20310, continent: \"North America\"} ];\nfindHighest(mountains);",
                        "console": [
                            {
                                "level": "log",
                                "values": [
                                    "The highest mountain is Everest at 29029 ft."
                                ]
                            }
                        ],
                        "type": "console"
                    }
                ],
                "description": "<p>Given a array of mountains, each with a name and a height, log the name and height of the tallest. Each mountain is represented as an object, for example:</p>\n\n<pre><code>{\n    name: \"Everest\",\n    height: 29029\n}</code></pre>",
                "starterCode": "function findHighest(mountains) {\n  // Write code here.\n  \n}",
                "solution": "function findHighest(mountains) {\n  var highest = mountains[0];\n  mountains.forEach(function(mountain) {\n    if (mountain.height > highest.height) {\n      highest = mountain;\n    }\n  });\n  console.log(\"The highest mountain is \" + highest.name + \" at \" + highest.height + \" ft.\");\n}",
                "title": "Tallest Mountain",
                "id": 20
            },{
                "testCases": [
                    {
                        "expression": "add(\"red\", 5);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 5
                            },
                            {
                                "name": "yellow",
                                "qty": 0
                            }
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "add(\"yellow\", 2);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 0
                            },
                            {
                                "name": "yellow",
                                "qty": 2
                            }
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "add(\"red\", 1);\nadd(\"yellow\", 3);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 1
                            },
                            {
                                "name": "yellow",
                                "qty": 3
                            }
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "add(\"red\", 1);\nadd(\"red\", 2);\nadd(\"yellow\", 3);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 3
                            },
                            {
                                "name": "yellow",
                                "qty": 3
                            }
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "add(\"green\", 8);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 0
                            },
                            {
                                "name": "yellow",
                                "qty": 0
                            },
                            {
                                "name": "green",
                                "qty": 8
                            }
                        ],
                        "description": "It can add new items.",
                        "type": "result"
                    },
                    {
                        "expression": "add(\"red\", 5);\nadd(\"yellow\", 2);\nadd(\"green\", 3);\nadd(\"yellow\", 7);\nadd(\"green\", 3);\nadd(\"blue\", 4);\nitems;",
                        "result": [
                            {
                                "name": "red",
                                "qty": 5
                            },
                            {
                                "name": "yellow",
                                "qty": 9
                            },
                            {
                                "name": "green",
                                "qty": 6
                            },
                            {
                                "name": "blue",
                                "qty": 4
                            }
                        ],
                        "type": "result"
                    }
                ],
                "solution": "var items = [\n  { name: \"red\", qty: 0 },\n  { name: \"yellow\", qty: 0 }\n];\n\nfunction add(name, count) {\n  var item = items.find(function(item) { return item.name === name; });\n  if (!item) {\n    item = { name: name, qty: 0 };\n    items.push(item);\n  }\n  item.qty += count;\n}",
                "starterCode": "var items = [\n  { name: \"red\", qty: 0 },\n  { name: \"yellow\", qty: 0 }\n];\n\nfunction add(name, count) {\n  // Write code here.\n}",
                "description": "<p>Complete an <code>add</code> function that increments the count of particular items in an array. Every time the function is called, it increases the `qty` of the appropriate item.</p>\n\n<p>For the final two test cases, when a new item is encountered that is not already in the list. It should be added.</p>",
                "title": "Keep Counts",
                "id": 24
            },{
                "testCases": [
                    {
                        "expression": "findPrimeFactors(2)",
                        "result": [
                            2
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(3)",
                        "result": [
                            3
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(4)",
                        "result": [
                            2,
                            2
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(9)",
                        "result": [
                            3,
                            3
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(18)",
                        "result": [
                            2,
                            3,
                            3
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(105)",
                        "result": [
                            3,
                            5,
                            7
                        ],
                        "type": "result"
                    },
                    {
                        "expression": "findPrimeFactors(199)",
                        "result": [
                            199
                        ],
                        "type": "result"
                    }
                ],
                "solution": "function findPrimeFactors(num) {\n  var factors = [];\n  var factor = 2;\n  while (num !== 1) {\n    if (num % factor === 0) {\n      factors.push(factor);\n      num /= factor;\n    } else {\n      factor++;\n    }\n  }\n  return factors;\n}",
                "starterCode": "",
                "description": "<p>Create a function named <code>findPrimeFactors</code> that takes one number in. The function returns an array of all the prime factors of that number.</p>\n<p>Prime factors is the list of all the smallest numbers that can be multiplied together to make that number. If the number is prime, the list will only contain the number itself. The number 1 should not be included in the list, and you can assume the number 1 will not be passed into your function.</p>\n<p><em>Note:</em> In order to pass the tests, your array will need to be sorted from smallest to largest.</p>",
                "title": "Prime Factors (Hard)",
                "id": 41
            },{
                "testCases": [
                    {
                        "description": "Does not use Array.sort()",
                        "expressionDisplay": "uses Array.sort()",
                        "expression": "!!__code__.match(/\\.\\s*sort\\s*\\(/)",
                        "result": false,
                        "skipCode": true,
                        "type": "result"
                    },
                    {
                        "result": [
                            "A",
                            "B",
                            "C"
                        ],
                        "expression": "var array = [\"A\", \"B\", \"C\"];\nmySorter(array);\narray;",
                        "expressionDisplay": "Sort [\"A\", \"B\", \"C\"]",
                        "type": "result"
                    },
                    {
                        "expression": "var array = [\"C\", \"B\", \"A\"];\nmySorter(array);\narray;",
                        "expressionDisplay": "Sort [\"C\", \"B\", \"A\"]",
                        "result": [
                            "A",
                            "B",
                            "C"
                        ],
                        "type": "result"
                    },
                    {
                        "expressionDisplay": "Sort [\"W\", \"F\", \"T\", \"Bam!!\"]",
                        "expression": "var array = [\"W\", \"F\", \"T\", \"Bam!!\"];\nmySorter(array);\narray;",
                        "result": [
                            "Bam!!",
                            "F",
                            "T",
                            "W"
                        ],
                        "type": "result"
                    }
                ],
                "description": "<p>Sort an array alphabetically by changing the order of the elements in the array.</p>\n\n<p>Do not use Array.sort(). Figure out how to do it yourself. You can search the internet for ideas if you want, but don't\ncopy-paste an answer.</p>",
                "starterCode": "function mySorter(array) {\n  // Write code here.\n}",
                "solution": "// bubble sort\nfunction mySorter(array) {\n  // bubble n times\n  for (var lowerLimit = 1; lowerLimit < array.length; lowerLimit++) {\n    // bubble the lowest item down\n    for (var i = array.length - 1; i >= lowerLimit; i--) {\n      if (array[i] < array[i - 1]) {\n        var temp = array[i - 1];\n        array[i - 1] = array[i];\n        array[i] = temp;\n      }\n    }\n  }\n  console.log(array);\n}",
                "title": "Sort an Array (hard)",
                "id": 25
            }
        ]
    }
});
