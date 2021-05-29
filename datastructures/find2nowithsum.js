const array1 = [1, 2, 6, 9];
const array2 = [1, 4, 4, 2];
const array3 = [1, 3, 7, 5];
const array4 = [10, 30, 70, 50, 40, 20, 60];

// Find if array contains any two no whose sum is given sum input

let isFound = (arr, sum) => {
    let set = new Set();
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {
        // const value = arr[i];
        const complement = sum - arr[i];
        if (set.has(arr[i])) {
            isFound = {
                isFound: true,
                pair: { value, complement }
            };
            break;
        }
        set.add(complement);
    }
    return isFound;
}

console.log(isFound(array1, 8));
console.log(isFound(array2, 8));
console.log(isFound(array3, 8));
console.log(isFound(array4, 80));