// functions activity 1
let factorial = n => {
    n = parseInt(n);  //parses a string argument and returns an integer
    if ((n === 0) || (n === 1)){
    return 1;
} else {
    return (n * factorial (n-1));
}
}
console.log(factorial(33));

