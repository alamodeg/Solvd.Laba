function stringDivide(string1) {
    
    let string2 = '3';

    const num1 = parseInt(string1);
    const num2 = parseInt(string2);

    const division = parseInt(num1 / num2);

    return division;
}

const result = stringDivide('10');
console.log(result);