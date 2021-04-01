// memoization 
// js object  , keys argument , value return value

const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);

}
console.log(fib(8))
console.log(fib(9))
console.log(fib(10))
console.log(fib(50))
