// multiple loops

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        console.log("hello",i,j)
    }
}

// entire loop will run 25 times
for (let i = 0; i < 5; i++){
    for (let j = 0; j < i; j++){
        console.log(i,j)
    }
}

for (let i = 0; i < 3; i++){
    for (let j = 0; j < i; j++){
        console.log(i,j)
    }
}