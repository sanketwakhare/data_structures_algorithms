const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j;
        for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            // shift elements to right by 1 until the correct insertion index is found
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
}

insertionSort(numbers);
console.log(numbers);

