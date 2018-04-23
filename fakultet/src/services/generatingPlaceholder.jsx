export const generatingPlaceholder = location => {
    let cutLocation = location.lastIndexOf("/");
    cutLocation = location.slice(cutLocation+1, location.length);
    console.log(cutLocation);
    
    switch(cutLocation){
        case "rankingi":
            cutLocation = "szukaj w rankingu...";
            break;
        case "grupy":
            cutLocation = "szukaj w grupach...";
            break;
        case "piwa":
            cutLocation = "szukaj piwa...";
            break;
        case "browary":
            cutLocation = "szukaj w browarach...";
            break;
        default:   
    }

    return cutLocation;
}