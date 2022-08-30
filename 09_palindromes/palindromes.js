const palindromes = function (s) {
    s = s.toUpperCase();
    var i = 0, j = s.length-1;
    isPalindrome = true;
    while (i < j && isPalindrome){
        let a = s.charAt(i);
        let b = s.charAt(j);
        if (!isALetter(a) || !isALetter(b)){
            while(i < j && !isALetter(a)){
                i++;
                a = s.charAt(i);
            }
            while(i < j && !isALetter(b)){
                j--;
                b = s.charAt(j);
            }
        }
        i++;
        j--;
        isPalindrome = a === b;
    }
    return isPalindrome;
};

function isALetter(char){
    return char.match(/[A-Z]/i);
}

// Do not edit below this line
module.exports = palindromes;
