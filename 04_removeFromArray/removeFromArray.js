const removeFromArray = function(arr, ...toRemove) {
    return arr.filter(num => toRemove.indexOf(num) < 0);
};

// Do not edit below this line
module.exports = removeFromArray;