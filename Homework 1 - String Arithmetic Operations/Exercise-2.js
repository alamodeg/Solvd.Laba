function stringMinus(_string) {

    // convert both strings to digits
    let string1 = this.split('').map(Number);
    let string2 = _string.split('').map(Number);

    // make both array to the same size to subtract them
    while (string1.length < string2.length) {
        string1.unshift(0);
    }
    while (string2.length < string1.length) {
        string2.unshift(0);
    }

    // make the subtraction
    let result = [];
    let borrow = 0;

    for (let i = string1.length - 1; i >= 0; i--) {
        let diff = string1[i] - string2[i] - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result.unshift(diff);
    }

    // delete zeros 
    while (result[0] === 0 && result.length > 1) {
        result.shift();
    }

    // convert de array of digits into a string
    return result.join('');
}

// use a prototype to extend the string function and utilize the previously defined function
String.prototype.minus = stringMinus;

let string1 = "1000000";
let string2 = "4";
console.log(string1.minus(string2));
