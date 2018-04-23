export const concatPath = item => {
    let index = item.lastIndexOf("/");

    const urlToPush = item.slice(index, item.length);
   
    
    return urlToPush;

}