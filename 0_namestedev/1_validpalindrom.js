function validatePalindrome(str) {
    // Your implementation
    let stra = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let rev = ""
    for (let i = 0; i < stra.length; i++) {
        rev = stra[i] + rev
    }
    return stra == rev
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome