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
    {id: 0, name: "Nazwa użytkownika", type: "text", placeholder:"miejsce na nazwe użytkownika...", max: 20, styleReq: "*"},
    {id: 1, name: "Adres email", type: "email", placeholder:"miejsce na adres email...", max: 30, styleReq: "*"},
    {id: 2, name: "Hasło", type: "password", placeholder:"miejsce na hasło...", max: 20, styleReq: "*"},
    {id: 3, name: "Powtórz hasło", type: "password", placeholder:"miejsce na powtórzone hasło...", max: 20, styleReq: "*"},
];
export const registerFormValidationItems = [
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 11},
    {id: 2, value: "", error: undefined, min: 5, strength: null},
    {id: 3, value: "", error: undefined, min: 5, strength: null},
    {id: 4, value: false, error: undefined, type: "checkbox"}
];








export const addGroupFormItems = [ 
    {id: 0, name: "Nazwa grupy", type: "text", placeholder:"wpisz nazwę...", max: 35},
    {id: 1, name: "Właściciel", type: "text", placeholder:"wpisz imię oraz nazwisko właściciela...", max: 20},
    {id: 2, name: "Data założenia", type: "date", placeholder:"wybierz datę..."},
    {id: 3, name: "Kraj pochodzenia", type: "text", placeholder:"wybierz kraj pochodzenia..."},
    {id: 4, name: "Historia grupy", type: "", placeholder: "" }
];
 export const addGroupFormItemsValidationArray = [ 
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 5},
    {id: 2, value: "", error: undefined},
    {id: 3, value: "", error: undefined, min: 5},
    {id: 4, value: "", error: undefined, min: 5}
];

export const addBreweryItems = [ 
    {id: 0, name: "Nazwa browaru", type: "text", placeholder:"wpisz nazwę browaru...", max: 35},
    {id: 1, name: "Adres browaru", type: "text", placeholder:"wpisz adres browaru...", max: 20},
    {id: 2, name: "Data założenia", type: "date", placeholder:"wybierz datę założenia..."},
    {id: 3, name: "Historia browaru", type: "", placeholder: "opisz historie browaru..."}
];
export const addBreweryValidationArray = [ 
    {id: 0, value: "", error: undefined, min: 5},
    {id: 1, value: "", error: undefined, min: 5},
    {id: 2, value: "", error: undefined},
    {id: 3, value: "", error: undefined, min: 10}
];





export const coreItems = [
    {id: 0, label: "Nazwa piwa", holder: "wprowadź nazwę piwa...", min: 5, max: 25, req: true, type: ""},
    {id: 1, label: "Opis piwa", holder: "wprowadź opis piwa...", min: 5, max: 255, req: true, type: ""},
    {id: 2, label: "Procent alkoholu", holder: "wprowadź procent alkoholu (n,nn)", min: null, max: 5, req: true, type: "number"},
    {id: 3, label: "Cena", holder: "wprowadź cene piwa (n,nn)", min: null, max: 12, req: true, type: "number"}
]
export const aditionalItems = [
    {id: 4, label: "Kolor", holder: "określ kolor...", min: 3, max: 255, req: false, type: ""},
    {id: 5, label: "Kraj pochodzenia", holder: "wprowadź kraj pochodzenia...", min: 2, max: 255, req: false, type: ""},
    {id: 6, label: "Współczynnik Ibu", holder: "wprowadź współczynnik Ibu...", min: null, max: null, req: false, type: "number"},
    {id: 7, label: "Współczynnik Blg", holder: "wprowadź współczynnik Blg...", min: null, max: null, req: false, type: "number"},
    
    {id: 8, label: "Typ", holder: "wprowadź typ piwa...", min: 3, max: 255, req: false, type: ""},
    {id: 9, label: "Dystrybucja", holder: "wprowadź sposób dystrybucji...", min: 3, max: 255, req: false, type: ""},
    {id: 10, label: "Rodzaj", holder: "wprowadź rodzaj piwa...", min: 3, max: 255, req: false, type: ""}
]

//jednak nie potrzeba
// export const editAccount = [
//     {id: 0, label: "Login", holder: "login użytkownika..", min: 5, max: 25, req: true, type: "text", value: JSON.parse(localStorage.getItem('loggedUserData')).username},
//     {id: 1, label: "Email", holder: "wprowadź email..", min: 5, max: 255, req: true, type: "email", value: JSON.parse(localStorage.getItem('loggedUserData')).email},
//     {id: 2, label: "Hasło", holder: "wprowadź hasło...", min: null, max: 20, req: true, type: "password", value: ""},
//     {id: 3, label: "Powtórz hasło", holder: "wprowadź powtórzone hasło..", min: null, max: 20, req: true, type: "password", value: ""}
// ]

export const editAccount = [
    {id: 0, label: "Login", holder: "login użytkownika..", min: 5, max: 25, req: true, type: "text"},
    {id: 1, label: "Email", holder: "wprowadź email..", min: 5, max: 255, req: true, type: "email"},
    {id: 2, label: "Hasło", holder: "wprowadź hasło...", min: null, max: 20, req: true, type: "password"},
    {id: 3, label: "Powtórz hasło", holder: "wprowadź powtórzone hasło..", min: null, max: 20, req: true, type: "password"}
]