import { emailPattern, onlyLettersAndNumbers } from '../consts/regexPaterns';
import moment from 'moment';

export const validateOneInput = (inputText, isNullable, inputName, min, inputType) => {
    
    if(!isNullable && !inputText){
        return "Pole " + inputName + " nie powinno być puste";
    }
    const inputTextLength = inputText.length;
    if(inputTextLength <= min){
        return "Pole " + inputName + " posiada za mało znaków";
    }
   

    if(inputName === "Nazwa użytkownika"){
        return !onlyLettersAndNumbers.test(inputText) ?
                "Pole " + inputName + " posiada zły format" : "";
    }
    switch(inputType){
        case "email":
            return !emailPattern.test(inputText) ?
                "Pole " + inputName + " posiada zły format" : "";
        case "date":
            const dateNow = moment().format();
                    
            if(moment(inputText).isAfter(dateNow)){
                return "Pole " + inputName + " nie może odnosić się do przyszłości";
            }
        
       
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


export const validatePictures = (fileType, maxSize, fileSize) => {
    if(fileSize > maxSize){
        return "Rozmiar zdjęcia nie może przekraczać " + maxSize + " bitów";
    }
    const correctFormats = ["image/jpg", "image/jpeg", "image/png"];
    let result = "Zdjęcie powinno być formatu jpg, jpeg lub png";
    for(let key in correctFormats){
        if(correctFormats[key] === fileType){
            result = "";
        }
    }    
    return result;    
    
}

export const validateRate = value => {
    if(value === undefined || value === null){
        return "Komentarz musi posiadac ocene piwa"
    }

    return "";
}