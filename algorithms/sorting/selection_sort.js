const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    // bubble up the smallest element to top
    for (let i = 0; i < array.length - 1; i++) {
        let smallest = array[i];
        // index of smallest number
        let k = 0;
        for (let j = i; j < array.length; j++) {
            if (smallest > array[j]) {
                smallest = array[j];
                k = j;
            }
        }
        // swap smallest with element of i index
        array[k] = array[i];
        array[i] = smallest;
        // array[i] = array[i] + array[k];
        // array[k] = array[i] - array[k];
        // array[i] = array[i] - array[k];
    }

    return array;

}

selectionSort(numbers);
console.log(numbers);