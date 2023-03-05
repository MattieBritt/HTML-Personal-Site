var output = [];

var numberOfKids = 1;

function fizzBuzz() {
        
output.push(numberOfKids);

numberOfKids++;
    

    if (numberOfKids % 3 == 0 ) {

        output.push("Fizz")
        
    }

    if (numberOfKids % 5 == 0) {

        output.push("Buzz")
    }
    

    if (numberOfKids % 3 == 0 && numberOfKids % 5 == 0) {

        output.push("FizzBuzz")
        output.pop("Buzz")
        output.pop("Fizz")

    }

    
    console.log(output);
    
}

