// // const student = new Object();
// // student.name = "John";
// // student.roll = 1;




// let student = {
//     name: "John",
//     email: "j@j.com",
//     roll: 1 ,
//     name:{
//         firstname: "John",
//         lastname: "Doe",
//     }

// }

// const {name:{firstname,lastname}} = student; //object destructuring

// console.log(firstname);



// const order ={
//     Id :"34646",
//     customer: {
//         name: "John",
//        addres:{
//            city: "Bongaon",
//            state: "West Bengal",
//            pincode: "741235"
//        }
       
//     }
// }
// //Destructuring it...........
// const{customer:{addres:{city,state,pincode}}} = order;
// console.log(pincode);


// const book1 ={
//     title: "Harry Potter",
//     author: "JK Rowling",
//     details: showdetails
    
// }
// const book2 ={
//     title: "Hunger Games",
//     author: "JK Rowling",
    
// }
// const book3={
//     title: "Harry Potter",
//     author: "JK Rowling",
// }
// /**
//  * A function that returns a string with the book title and author.
//  * @this {Object} The book object.
//  * @returns {string} A string with the book title and author.
//  */
// function showdetails() {
//     return `${this.title} by ${this.author}`;
// }
// console.log(book1.details());


// const car1={
//     brand:"toyota",
//     model:"camry",

// }

// function startengine(){
//     return `${this.brand} car`

// }
// car1.start =startengine;
// console.log(car1.start());


//symbol
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(typeof((sym1)));

const obj1={
    a:1,
}

const obj2={
    b:2,
}

const obj3={
    c:3,
}
console.log({...obj1,...obj2,...obj3});

//output - {a: 1 , b: 2, c: 3}

