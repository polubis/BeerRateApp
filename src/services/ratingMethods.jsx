export const calculatingRateOnStars = rate => {
    const resultArray = [];
    for(let i = 1 ; i <= 5; i++){
        if(Number(rate) >= i){
            resultArray.push({id: i-1, startColor: "rgb(255, 174, 0)", endColor: "rgb(255, 174, 0)"})
        }
        else{
            resultArray.push({id: i-1, startColor: "rgb(255, 255, 255)", endColor: "rgb(255, 255, 255)"})
        }
    }
    return resultArray;
}