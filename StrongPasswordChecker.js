let stepCount = 0;

const lengthInRange = (password) => password.length >= 6 && password.length <= 20;  
const hasUpperCaseLetter = (password) => password.toLowerCase() != password;
const hasLowerCaseLetter = (password) => password.toUpperCase() != password;
const hasOneDigit = (password) => /\d/.test(password);
/**
 * @param {string}
 * @return {number}
 */
 var checkPassWord = function(password) {
    stepCount = 0;
    if (!lengthInRange (password)) stepCount++;
    if (!hasUpperCaseLetter(password)) stepCount++;
    if (!hasLowerCaseLetter(password)) stepCount++;
    if (!hasOneDigit(password)) stepCount++;
    return stepCount;
};

console.log('>>> Should return 5 for "a". Actual:', checkPassWord('a'));
console.log('>>> Should return 3 for "aA1". Actual:', checkPassWord('aA1'));
console.log('>>> Should return 0 for "1337C0d3". Actual:', checkPassWord('1337C0d3'));