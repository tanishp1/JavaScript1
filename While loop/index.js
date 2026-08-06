// let n = 5;
// let fact = 1;
// let i = 1;

// while(i <= n){
//     fact = fact * i;
//     i++;
// }
// console.log(`factorial number is ${n} is ${fact}`)

// let n = 12345;
// let count = 0;

// if(n === 0){
//     count = 1;
//     } else {
//         n = Math.abs(n);

//         while(n > 0){
//             count ++;
//             n = Math.floor(n / 10)
//         }
//     }
// console.log(count)

let n = 123;
let sum = 0;

n = Math.abs(n);

while(n > 0){
    sum = sum + n % 10;
    n = Math.floor(n / 10)
}
console.log(sum);
