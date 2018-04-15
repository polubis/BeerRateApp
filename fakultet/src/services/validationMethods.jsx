export const validateOneInput = (inputText, isNullable, inputName, min) => {
    
    if(!isNullable && !inputText){
        return "Pole " + inputName + " nie powinno być puste";
    }
    const inputTextLength = inputText.length;
    if(inputTextLength <= min){
        return "Pole " + inputName + " posiada za mało znaków";
    }


    return "";
}