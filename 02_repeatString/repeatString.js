const repeatString = function(str, n) {
    if (n >= 0) {
        let a = '';
        let i = 0;
        while (i < n) {
            a = a.concat(str);
            i++;
        };
        return(a);
    }
    else {
        return('ERROR');
    };
};

repeatString('hey', 3);

repeatString('hello', 10);

repeatString('hi', 1);

repeatString('bye', 0);

repeatString("don't use the built-in repeat method!", 1);

repeatString('goodbye', -1);

const number = Math.floor(Math.random() * 1000);

repeatString('hey', number);

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
