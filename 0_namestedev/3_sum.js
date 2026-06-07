function sum(...args) {
    // Your implementation
    let s = 0;
    let a = [...args];
    for (let i = 0; i < a.length; i++){
        s+=a[i]
    }
    return s
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum