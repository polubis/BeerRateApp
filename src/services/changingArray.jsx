export const changingArray = (stop, beers) => {
    let start = 0;
    const copiedBeers = [...beers];
    const mainArray = [];
    const numberOfMainArrays = Math.ceil(copiedBeers.length/5);
    let coreLength = copiedBeers.length > stop ? stop : copiedBeers.length;
    for(let i = 0; i < numberOfMainArrays; i++){
        const array = [];
        for(let j = start ; j < coreLength; j++){
            array.push(copiedBeers[j]);
        }

        if(start + stop > copiedBeers.length)
            start = copiedBeers.length - copiedBeers.length-stop;

        else
            start += stop;
        
        if(coreLength + stop > copiedBeers.length)
            coreLength = copiedBeers.length;
        
        else
            coreLength += stop;
        
        

        mainArray.push({id: i, array: array});
    }        
    return mainArray;
}