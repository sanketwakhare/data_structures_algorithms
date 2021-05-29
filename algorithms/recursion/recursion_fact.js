// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if (number <= 1) {
        return 1;
    }
    let answer = number * findFactorialRecursive(number - 1);
    return answer;
}

function findFactorialIterative(number) {
    console.time("findFactorialIterative")
    //code here
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    console.timeEnd("findFactorialIterative")
    return answer;
}

function test() {
    console.time("findFactorialRecursive");
    console.log(findFactorialRecursive(6));
    console.timeEnd("findFactorialRecursive");
}

test();
console.log(findFactorialIterative(6));
