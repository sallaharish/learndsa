
// count the number of digits 

function countdigit(num) {
    if (num == 0) {
        return 1
    }
    let count = 0
    //    in case of negative numbers 
    if (num < 0) {
        num = Math.abs(num)
    }
    while (num > 0) {
        // to avoid the integers values 
        num = Math.floor(num / 10)
        count += 1
    }
    return count
}

console.log(countdigit(-1000))