// Normal function

// function greetName(name){
//     console.log(`my name is ${name}`);
// }
// greetName("Tanish")

// Expression function

// let greet = function(name){
//     console.log(`My name is ${name}`)
// }
// greet("Tanish")

// Arrow function

// let greet  =  (name) => {
//     console.log(`my name is ${name}`)
// }
// greet("tanish")

// function createOrder(item, quantity = 1, ...extra){
//     const extratext = extra.length > 0 ? `with topping : ${extra.join (" ,")}`:"with no extra";
//     return `${item} x ${quantity} = ${extratext}`;
// }
// console.log(createOrder("pizza", 2, "chesse", "olives"))

// factorial number

// function factorial(n){
//     if( n == 0 || n == 1){
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))

// sum to 

// function sumTo(n){
//     if( n < 0 ){
//         return 0;
//     }
//     return n + sumTo(n - 1)
// }
// console.log(sumTo(5))

// fibonacis

// function fibonaccis(n){
//     if(n < 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }
//     return fibonaccis(n - 1) + fibonaccis(n - 2)
// }
// console.log(fibonaccis(5))
