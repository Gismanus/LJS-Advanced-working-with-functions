function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(2, 3));

// Context: {x: 2, n: 3, string 5} (Call: pow(2, 3)); => new context

// Context: {x: 2, n: 2, string 1} (Call: pow(2, 2)); => new context
// Context: {x: 2, n: 3, string 5} (Call: pow(2, 3)); => old context saved in stack

// Context: {x: 2, n: 1, string 1} (Call: pow(2, 1)); => this new context returns 2 and finish call with deleting this context;
// Context: {x: 2, n: 2, string 1} (Call: pow(2, 2)); => old context saved in stack
// Context: {x: 2, n: 3, string 5} (Call: pow(2, 3)); => old context saved in stack

// Context: {x: 2, n: 2, string 1} (Call: pow(2, 2)); => this old context returns 4
// and finish call with deleting this context;
// Context: {x: 2, n: 3, string 5} (Call: pow(2, 3)); => old context saved in stack

// Context: {x: 2, n: 3, string 1} (Call: pow(2, 3)); => this old context returns 8
// and finish call with deleting this context;
