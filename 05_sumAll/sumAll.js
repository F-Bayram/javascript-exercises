const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0)
        return "ERROR";
    var result = 0;
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
