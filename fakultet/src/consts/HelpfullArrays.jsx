export const navBarNavItemsBeforeLogingIn = ["Logowanie", "Rejestracja"];


export const logingFormItems = [ // służa do wyświetlenia potrzebnych inputów
    {id: 0, name: "Nazwa użytkownika", type: "text", placeholder:"miejsce na login...", max: 20},
    {id: 1, name: "Hasło", type: "password", placeholder:"miejsce na hasło...", max: 20}
];

export const loginFormValidationArray = [ // służa do walidacji inputów
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 5}
];

export const registerFormItems = [
    {id: 0, name: "Login", type: "text", placeholder:"miejsca na nazwe użytkownika...", max: 20},
    {id: 1, name: "Adres email", type: "email", placeholder:"miejsce na adres email...", max: 30},
    {id: 2, name: "Hasło", type: "password", placeholder:"miejsce na hasło...", max: 20},
    {id: 3, name: "Powtórz hasło", type: "password", placeholder:"miejsca na powtórzone hasło...", max: 20}
];
export const registerFormValidationItems = [
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 11},
    {id: 2, value: "", error: undefined, min: 5, strength: null},
    {id: 3, value: "", error: undefined, min: 5, strength: null}
];