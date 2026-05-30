// loop[ menans doing things multiple times]

for (let i = 0; i < 20; i++) {
    console.log("hello", i)
}


// initilization 
// condition 
// change


for (let i = 0; i <= 4; i++) {
    console.log("hello", i)
}

// you can print the value of i also

for (let i = 0; i <= 10; i = i + 2) {
    console.log("hello multiply", i)
}


for (let i = 5; i > 0; i = i - 1) {
    console.log("hello multiply", i)
}



for (let i = 5; i >= 4; i = i - 1) {
    console.log("hello multiply", i)
}
// you can also call the function in side that 
function GREET() {
    console.log("nammamama")
}

for (let i = 0; i < 10; i++) {
    GREET()
}
// printing the number using the for loop

let a = [121, 2, 12, 1, 21, 2, 12, 1]
let lengt = a.length

for (let i = 0; i <= lengt; i++) {
    console.log(a[i])
}



// prine even numbers in the array

let arr = [1, 2, 3, 4, 5, 56, 6, 5, 4, 3, 2, 2]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i], "even")
    }
    else {
        console.log("odd")
    }
}


// same thing using the while loop

let i = 0;
while (i < arr.length) {
    console.log(arr[i])
    i=i+1
}