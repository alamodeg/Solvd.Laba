function stringPlus(_string) {
    
    // convert both strings to digits
    let string1 = this.split('').map(Number);
    let string2 = _string.split('').map(Number);

    // make both array to the same size to sum them
    while (string1.length < string2.length) {
        string1.unshift(0);  //Add zeros to the left
    }
    while (string2.length < string1.length) {
        string2.unshift(0);
    }

    // make the sum digit by digit taking in count the carry
    let result = [];
    let carry = 0;
    
    //make the sum
    for (let i = string1.length - 1; i >= 0; i--) {
        let sum = string1[i] + string2[i] + carry;
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        result.unshift(sum);
    }

    // convert de array of digits into a string
    return result.join('');
}

// use a prototype to extend the string function and utilize the previously defined function
String.prototype.plus = stringPlus;

let string1 = "55555555555555555555555555555555555555555555555555555";
let string2 = "4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444";
console.log(string1.plus(string2));