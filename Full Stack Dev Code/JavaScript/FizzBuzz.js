var output = [];

var numberOfKids = 1;

function fizzBuzz() {

output.push(numberOfKids);

if (numberOfKids % 3 == 0 ) {

        output.pop(numberOfKids)
        output.push("Fizz")

    }
    

    if (numberOfKids % 5 == 0) {

        output.pop(numberOfKids)
        output.push("Buzz")
    }``
    

    if (numberOfKids % 3 == 0 && numberOfKids % 5 == 0) {

        output.pop(numberOfKids)
        output.push("FizzBuzz")


    }
    
        console.log(output);

    numberOfKids++;
    
}



