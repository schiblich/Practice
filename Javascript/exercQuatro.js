/*
 * Create the function factorial here
 */
let fix = n - 1;
function factorial(n) {
    for (let i = 1; i <= fix; i++) {
        n *= i;
        console.log(n);
    }
}
factorial(4)