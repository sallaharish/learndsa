for (let i = 0; i < 5; i++){
    let row = " "
    for (let j = 0; j < 5; j++){
        row+=" * "
    }
    console.log(row)
}


for (let i = 0; i < 5; i++){
    let row=" "
    for (let j = 0; j <= i; j++){
        row+=" * "
    }
    console.log(row)
}

for (let i = 0; i < 6; i++){
    let row=" "
    for (let j = 1; j <= i; j++){
        row+=" "+j
    }
    console.log(row)
}

for (let i = 0; i < 6; i++){
    let row=" "
    for (let j = 1; j <= i; j++){
        row+=" "+i
    }
    console.log(row)
}
 console.log(";;;;;;;;;;;;;;")
for (let i = 1; i < 6; i++){
    let row=" "
    for (let j = 1; j <=5-i; j++){
        row+=" "+(j)
    }
    console.log(row)
}

for (let i = 1; i < 6; i++){
    let row=" "
    for (let j = 1; j <=5-i; j++){
        row+=" "+ "*"
    }
    console.log(row)
}

for (let i = 1; i <=5; i++){
    let space=" "
    for (let j = 1; j <=5-i; j++){
        space += "-"
    }
    for (let k= 1; k <=i; k++){
        space += "*"
    }
    console.log(space)
}

let toggle =1
for (let i = 1; i < 6; i++){
    let row = " "
  
    for (let j = 1; j <=i; j++){
        row += " " + toggle
        if (toggle == 1) {
            toggle=0
        }
        else {
            toggle=1
        }
    }
    console.log(row)
}





