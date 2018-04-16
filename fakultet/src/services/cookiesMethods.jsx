
/*export const setCookie = (name, value, deleteTime) => {
    const date = new Date();
    date.setTime(date.getTime() + (deleteTime*24*60*60*1000));
    const expire = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expire + ";path=/";
}
export const getCookies = (cookieName) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const checkForCookies = () => {
    return false;
}


/*
            const keys = Object.keys(response.data.successResult);
            for(let key in keys){
                if(!getCookies(key)){
                    setCookie(key, response.data.successResult[key], 1);
                }
            }
            */