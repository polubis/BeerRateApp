import React from 'react';
import './_description.css';
import BreweryIcon from '../../../assets/icons/beer-factory.png';



const description  = props => (
    <div className="brewery-arrow-container">
        <img src={BreweryIcon} alt="Ikona browaru" />
        <i className="fa fa-arrow-right"></i>
        <article>
            <p className="arrow-header">O sposobie produkcji słów kilka</p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
        </article>
        <div className="right-details">
            <h3 className="arrow-header">Cechy szczególne</h3>
            <p>Sposób dystrybucji: <i>Regionalnie</i></p>
            <p>Lokalizacja: <i>Województwo Warmińsko Mazurskie</i></p>
            <p>Flagowy produkt: <i>Tyskie</i></p>
            <p>Czas istnienia: <i>20 lat</i></p>
        </div>                        
    </div>
);

export default description;
