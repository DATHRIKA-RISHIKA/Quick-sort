function quickSort(arr, left, right) {  //where left = 0 and right = size of array 
    if (left >= right) {
        return; // Base case: array with 1 or 0 elements
    }

    // Partitioning the array
    let pivot = arr[left];
    let i = left + 1;
    let j = right;

    // Rearrange elements around the pivot
    while (i <= j) {
        // Move i right as long as arr[i] < pivot
        while ((arr[i] < pivot) && (i <= right)) {
            i++;
        }
        // Move j left as long as arr[j] > pivot
        while ((arr[j] > pivot) && (j >= left)) {
            j--;
        }
        // Swap if necessary
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place the pivot in the correct position
    [arr[left], arr[j]] = [arr[j], arr[left]];

    // Recursively sort the left and right partitions
    quickSort(arr, left, j - 1);  // Left side of pivot
    quickSort(arr, j + 1, right); // Right side of pivot
}

function sortArray() {
    const input = document.getElementById("inputArray").value;
    const arr = input.split(",").map(Number);
    quickSort(arr, 0, arr.length - 1);
    document.getElementById('result').innerText = "Sorted Array: " + arr.join(', ');
}
