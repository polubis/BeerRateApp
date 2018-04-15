export const navBarNavItemsBeforeLogingIn = ["Logowanie", "Rejestracja"];


export const logingFormItems = [ // służa do wyświetlenia potrzebnych inputów
    {id: 0, name: "Nazwa użytkownika", type: "text", placeholder:"miejsce na login...", max: 20},
    {id: 1, name: "Hasło", type: "password", placeholder:"miejsce na hasło...", max: 20}
];

export const loginFormValidationArray = [ // służa do walidacji inputów
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 5}
]