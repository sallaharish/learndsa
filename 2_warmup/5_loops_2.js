// write the function to serach a aeleemt in thte arry and retuen the index of it ..if the element is not present return -1


function searchElement(arr,val) {
    let a = arr.length
    for (let i = 0; i < a; i++){
        if (arr[i] == val) {
            return i
        }
    }
    
        return -1
    
}

console.log(searchElement([1, 2, 2, 3, 4, 3, 2], 3
))


// count the number of -ve integers in the array


function neg(arr) {
    // let a = arr.length;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count+=1
        }
    }
    return count 
}
console.log(neg([1,2,3,2,1,2,1,-1,-2]))

