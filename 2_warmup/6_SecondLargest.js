// for finding the second largest number in the array

function SecondLargest(arr) {

    // for checking the corner case whatif the length is less then 2 
    if (arr.length < 2) {
        return "Null"
    }

    let firstLar = -Infinity
    let secondlar = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLar) {
            secondlar = firstLar
            firstLar = arr[i]

        }

        // for checking the what if array contains duplicatee elements in it 
        else if (arr[i] > secondlar && arr[i] !== firstLar) {
            secondlar = arr[i]
        }
    }
    return secondlar
}

console.log(SecondLargest([3, 10, 10, 2, 5]))

// array is empty
// what if -ve numbers
// arr duplicates <a></a >
