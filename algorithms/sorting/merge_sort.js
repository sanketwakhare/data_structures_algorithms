const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    console.log('split-->', array);
    // Split Array in into right and left
    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2, array.length);
    console.log('left', left);
    console.log('right', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else if (right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex++]);
        }
    }
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    console.log('merge', left, right, '-->', result);
    return result;
}


const answer = mergeSort(numbers);
console.log('result', answer);