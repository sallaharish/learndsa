
// check number is palindrom or not

function Palindrom(num) {
    // we need to check where number is less than 0
    if (num < 0) {
        return false
    }

    // make it copy beacuse while we are didvinding the things the value of n is reduced so we need to amek fthe copy
    let numcopy = num;
    let rev = 0;
    while (num > 0) {
        let val = num % 10;
        rev = (10 * rev) + val
        num= Math.floor(num/10)
    }
    return rev === numcopy;
}

let data = 1234321
console.log(Palindrom(data))