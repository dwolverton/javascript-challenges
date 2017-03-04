## Add Numbers
Return the sum of two numbers

### Code
	add(num1, num2) {
	// Write code here
	}
	
### Solution
	add(num1, num2) {
		return num1 + num2;
	}

### Tests
`add(1, 3)` -> `3`

`add(1, -1)` -> `0`

`add(-2, -1)` -> `-3`

## Count from 1 to N
Log all the numbers starting at 1 and ending at `n`.

### Code
	countTo(n) {
	// Write code here
	}
	
### Solution
	countTo(n) {
		for (var i = 1; i <= n; i++) {
			console.log(i);
		}
	}

### Tests
`countTo(3)`

* 1
* 2
* 3

`countTo(1)`

* 1

`countTo(0)`

*No console*

## Create an array of words.
Create an array containing the two words "Detroit" and "Michigan". Store the array in a variable called `words`.

### Solution
	var words = [ "Detroit", "Michigan" ];

### Tests
`words` -> `["Detroit", "Michigan"]`