/* function factorial(n){
    let result = 1;
    for (let i = n; i > 0; i--){
       result *= i;
    }
    return result;
} */

function factorial(n){
    if(n == 1){
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));