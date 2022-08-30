const fibonacci = function(index) {
    if (index < 0)
        return "OOPS";
    var res = 1;
    var before = 1;
    for (let i = 1; i < index; i++){
        before = res - before;
        res = res + before;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
