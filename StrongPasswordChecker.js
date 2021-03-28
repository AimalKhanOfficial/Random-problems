let stepCount = 0;

const lengthInRange = (password) => password.length >= 6 && password.length <= 20;  
const hasUpperCaseLetter = (password) => password.toLowerCase() != password;
const hasLowerCaseLetter = (password) => password.toUpperCase() != password;

/**
 * @param {string}ss password
 * @return {number}
 */
 var checkPassWord = function(password) {
    stepCount = 0;
    if (!lengthInRange (password)) stepCount++;
    if (!hasUpperCaseLetter(password)) stepCount++;
    if (!hasLowerCaseLetter(password)) stepCount++;
    return stepCount;
};

console.log('>>> Should return 5. Actual:', checkPassWord('a'));
console.log('>>> Should return 3. Actual:', checkPassWord('aA1'));
console.log('>>> Should return 0. Actual:', checkPassWord('1337C0d3'));