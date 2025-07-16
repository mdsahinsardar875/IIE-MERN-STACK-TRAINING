// Declare a variable
let greeting = "Hello, world!";

// Function to print greeting multiple times
function printGreeting(times) {
    for (let i = 1; i <= times; i++) {
        if (i % 2 === 0) {
            console.log(greeting + " This is an even number: " + i);
        } else {
            console.log(greeting + " This is an odd number: " + i);
        }
    }
}

// Call the function with 5 times
printGreeting(6);







let user1={
    name: "sahin",
    rest:{
        age:21,
        state:"wb",
    },
};
console.log(user1,user1.name,user1.rest,user1.rest.age)

