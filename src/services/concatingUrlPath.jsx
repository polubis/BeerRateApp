export const concatPath = item => {
    let index = item.lastIndexOf("/");

    const urlToPush = item.slice(index, item.length);
   
    
    return urlToPush;

}


export const findIndexValue = path => {
    const indexOfId = window.location.href.lastIndexOf("/");
    const value = window.location.href.slice(indexOfId+1, window.location.href.length);

    return value;
}