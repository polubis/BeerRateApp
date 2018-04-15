import { onlyLettersAndNumbers, upperCaseLetters, numbers } from '../consts/regexPaterns';

export const measuringTextStrength = (inputText, maxLength) => {
    if(inputText.length === 0){
        return 0;
    }
    let result = 0;
    if(inputText.length === maxLength){
        result += 5;
    }
    if(!onlyLettersAndNumbers.test(inputText)){
        result += 5;
    }
    if(upperCaseLetters.test(inputText)){
        result += 5;
    }
    if(numbers.test(inputText)){
        result +=5;
    }
    result += inputText.length;
    
    return result;
    

}