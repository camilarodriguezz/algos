// write a function that accepts a number,
// and return the nth number in the Fibonacci sequence

function fib(n){
    if(n === 0 || n===1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(10))