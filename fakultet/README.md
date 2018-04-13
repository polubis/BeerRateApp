Tworzenie Store :
    Konwencja nazewnictwa plików oraz folderów: NazwaCzegoś
Tworzymy zawsze nowy folder jeżeli implementujemy nową część aplikacji - przykład Logowanie folder
Loging, rzeczy związane z ładowaniem Piw w BeersLoading.
Actions - akcje,
ActionTypes - poprostu rodzaje akcji w danym reducerze,
Reducers - reducery,
InitialState - stan części stora.
Potem w pliku index.js należy dołączyć import danego reducera i podpiąć go pod zmienną pod combineReducers()

Nazewnictwo componentów oraz containerów

Container: nazewnictwo plików oraz folderów: NazwaCzegoś

componenty: nazewnictwo plików oraz folderów camelCase.
Jeżeli dany komponent ma być używany tylko raz dajemy znak _ przed nazwą _camelCase
W przypadku gddy podejrzewamy, ze komponent ten będzie używany wiele razy nie dajemy znaku _ 


Nazwy klas CSS
    Jeżeli dana klasa jest stworzona tylko po to, żeby być containerem innych elementów HTML,a
    to powinna się nazywać nazwa-container np. root-container

W innym przypadku nazwy camelCase

services - to folder w którym trzymane będą wszystkie funkcje, które mogą się do czegoś przydać globalnie, np walidacja. Konwencja nazw NazwaPliku. Nie tworzyć tam dodatkowych folderów. Poprostu dodawać pliki.

axios-instances - wszystkie instancje axiosa. Stosować nazwę NazwaPliku




DOBRE PRAKTYKI.

Comitowanie:
    Nazwa commita, jeżeli coś dodaliśmy to Add: nazwaFunkcjonalności, jeżeli naprawa czegoś to
    Edit: nazwaFunkcjonalności, jeżeli jest to coś innego to poprostu tytuł wskazujący na to co się robiło. 


Gromadzenie danych:

Uzywamy one-directional-data-flow tj. wszystkie rzeczy związane z działaniem aplikacji pod kontem
używania danych z serwera przechowujemy w storze, w state componentów przechowujemy rzeczy związane z animacjami czy cos ma zostać wyświetlone bądź nie.

Refractor i pilnowanie czystości kodu:
    Po zaimplementowaniu czegoś dokonujemy refraktoryzacji kodu i dbamy o jego czystość. usuwamy
    wszystkie console.logi oraz nie dopuszczamy do powstawania warningów w esLincie.




