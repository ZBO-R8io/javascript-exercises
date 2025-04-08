const reverseString = function(str) {
    array = Array.from(str);
    reverseArray = array.reverse();
    return(reverseArray.join(''));;
};

reverseString('hello');

reverseString('hello there');

reverseString('123! abc! Hello, Odinite.');

reverseString('');

// Do not edit below this line
module.exports = reverseString;
