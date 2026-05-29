function HelloWorld() {
    console.log("harish salla")
}
HelloWorld();

// when i call this function it will be executed 

function greet(name) {
    console.log("hello" + name)
}

greet("harish")

// function can make dynamic things


function add(num1, num2) {
    console.log(num1 + num2)
}
add(12, 23)

// retuen the square of the nyumber 


function sq(num) {
    return num * num
}
console.log(sq(12))


// function is like a blak box 

// peopel no need to worry what will be he  out put will come in the ui

// pass some value and retuen some value <a></a>

// create function and expecet the age for egligibel to vaote or not


function egligible(age) {
    if (age < 0) {
        return "invalid to vote"
    }
    else if (age > 18) {
        return "egligible to vote"
    }
    else {
        return "not egligible to vote"
    }
}

console.log(egligible(-1))

// check numer is even or ordd

function number(num) {
    return num%2==0 ? "even" :" odd"
}
console.log(number(1))