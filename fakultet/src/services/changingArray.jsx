export const changingArray = (stop, beers) => {
    let start = 0;
    const copiedBeers = [...beers];
    const mainArray = [];
    const numberOfMainArrays = Math.ceil(copiedBeers.length/5);
    for(let i = 0; i < numberOfMainArrays; i++){
        const array = [];
        for(let j = start ; j < copiedBeers.length; j++){
            array.push(copiedBeers[j]);
        }
        start += stop;
        mainArray.push({id: i, array: array});
    }        

    return mainArray;
}