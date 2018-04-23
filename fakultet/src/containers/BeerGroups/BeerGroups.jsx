import React, { Component } from 'react';
import './BeerGroups.css';
import BeerFormGroupInfo from '../../components/_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import Awards from '../../components/_awards/_awards';
import Carousel from '../../components/UI/_carousel/_carousel';
import BeerCart from '../../components/_beerCart/_beerCart';
const leftRank = [
    {id:1, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:2, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:3, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:4, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:5, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:6, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43},
    {id:7, content: "Piwo przeznaczone do picia w słoneczne dni. Wyjątkowo gasi pragnienie i wspomaga apetyt  na rozpalenie grila", title: "Łomża", rate: 4.43}
]

class BeerGroups extends Component {
    render() { 
        return ( 
            <div className="beer-groups-container">
                <div className="left-content-beer-groups">
                    <h1 className="beer-group-main-header">Grupa piwowarska - bracia  </h1>
                    <p className="beer-group-story-paragraph"><b className="orange-link">Historia</b></p>
                    <div className="beer-group-story-block">
                        <span>Lorem </span>Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
                        W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez Cycerona. Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32.
                    </div>
                    
                    <BeerFormGroupInfo />
                    <h2 className="beer-group-main-header">Browary</h2>

                    <Carousel />
                    <div className="awards-holder">
                        <Awards />
                    </div>
                   
                
                </div>
                
                <div className="right-content-beer-groups">
                    {leftRank.map(b => {
                        return <BeerCart content={b.content} key={b.id} title={b.title} rate={b.rate}/>
                    })}
                </div>
                
                
              
                
                
            </div>
         )
    }
}
 
export default BeerGroups;
