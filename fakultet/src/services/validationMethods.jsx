import { emailPattern } from '../consts/regexPaterns';

export const validateOneInput = (inputText, isNullable, inputName, min, inputType) => {
    
    if(!isNullable && !inputText){
        return "Pole " + inputName + " nie powinno być puste";
    }
    const inputTextLength = inputText.length;
    if(inputTextLength <= min){
        return "Pole " + inputName + " posiada za mało znaków";
    }

    switch(inputType){
        case "email":
            return !emailPattern.test(inputText) ?
                "Pole " + inputName + " posiada zły format" : "";
        default:
            
            break;
    }
    return "";
}

export const validateTwoTheSameInputs = (firstInput, secondInput, firstInputName, secondInputName) => {
    if(firstInput !== secondInput){
        return "Pola " + firstInputName +
            " oraz " + secondInputName + " nie powinny się od siebie różnić";
    }
    return "";
}

