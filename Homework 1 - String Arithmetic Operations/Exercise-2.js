function stringMinus(string1) {
    
    let string2 = '44';

    if (string1 >= string2) {
       
        const num1 = parseInt(string1);
        const num2 = parseInt(string2);
    
        const subtraction = num1 - num2;
    
        return subtraction;
    }
    else{
        return 'Your string should be lower or equal than ' + string2;
    }
}

const result = stringMinus('44');
console.log(result);