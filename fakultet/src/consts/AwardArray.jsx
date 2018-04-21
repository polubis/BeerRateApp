import Podium from '../assets/beer-rewards/cup.png';
import FirstPlace from '../assets/beer-rewards/first-place.png';
import Gift from '../assets/beer-rewards/prezent.png';
import WomansFav from '../assets/beer-rewards/woman-fav.png';

export const awardArray = [
    {id: 0, name: "Ulubieniec kobiet", img: WomansFav, desc: "Nagroda otrzymywana w przypadku gdy wiekszośc głosujących użytkowników dała pozytywna ocene wiekszą niż 3 oraz gdy byli oni kobietami"},
    {id: 1, name: "Idealny prezent dla faceta", img: Gift, desc: "Nagroda otrzymywana w przypadku gdy piwo jest z gatunku Lagger oraz otrzymała wiecej niż 20 pozytywnych ocen od kobiet"},
    {id: 2, name: "Pierwsze miejsce w rankingu!", img: FirstPlace, desc: "Nagroda otrzymana w przypadku gdy marka piwa jest na pierwszym miejscu w rankingu serwisu"},
    {id: 3, name: "Złota trójka", img: Podium, desc: "Nagroda otrzymana gdy marka piwa znajduje sie na jednym z trzech pierwszych miejsc w rankingu"}

]