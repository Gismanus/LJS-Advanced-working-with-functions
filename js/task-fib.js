function fib(count) {
    let a = 1;
    let b = 1;
    let c = 2;
    for (let i = 3; i < count; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));