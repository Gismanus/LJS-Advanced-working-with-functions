// function sumTo(n){
//     let result = 0;
//     for (let i = 1; i <= n; i++){
//         result += i;
//     }
//     return result;
// }

// function sumTo(n){
//     if (n == 1){
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// function sumTo(n){
//     return n*(n + 1)/2;
// }

console.log(sumTo(1)); // = 1
console.log(sumTo(2)); // = 2 + 1 = 3
console.log(sumTo(3)); // = 3 + 2 + 1 = 6
console.log(sumTo(4)); // = 4 + 3 + 2 + 1 = 10
// ...
console.log(sumTo(100)) // = 100 + 99 + ... + 2 + 1 = 5050