import React from 'react';
import './_beerGroupCart.css';
import Image from '../../assets/beers.jpg';
import Cup from '../../assets/beer-rewards/cup.png';
import FirstPlace from '../../assets/beer-rewards/first-place.png';
import ManGift from '../../assets/beer-rewards/prezent.png';
import WomanFav from '../../assets/beer-rewards/woman-fav.png';
import BeerFactoryBackground from '../../assets/beer-rewards/beer-factory-back.jpg';
import Owner from '../../assets/beer-group-details/owner-png.png';
import BirthDate from '../../assets/beer-group-details/birth-date.png';
import Compas from '../../assets/beer-group-details/map.png';



const helpArray = [
    {id:1, itemName: "Tyskie", content: "Grupa piwowarska Tyskie", rate: 4.43},
    {id:2, itemName: "Specjal", rate: 5.00},
    {id:3, itemName: "Specjal", rate: 5.00},
    {id:4, itemName: "Specjal", rate: 5.00},
    {id:5, itemName: "Specjal", rate: 5.00}
]

const rewards = [
    {id: 0, desc: "Ulubieniec kobiet", img: WomanFav},
    {id: 1, desc: "Idealny dla mężczyzn", img: ManGift},
    {id: 2, desc: "Pierwsze miejsce w rankingu!", img: FirstPlace},
    {id: 3, desc: "Złota trójka", img: Cup}
]

const beerGroupCart = props => (
    
    <div className="mini-rank-container">
        <div className="rank-steirways">
            <h1>Grupa piwowarskia - bracia </h1>

            
            <div className="beer-group-details">
                
                    <div className="info-block">
                        <p>Założciel</p>
                        <img src={Owner} alt="Właściciel" />
                        <p>Tom Cruse</p>
                    </div>
                    <div className="info-block">
                    <p>Rok założenia</p>
                        <img src={BirthDate} alt="Właściciel" />
                        <p>2017</p>
                    </div>
                    <div className="info-block">
                        <p>Lokalizacja</p>
                        <img src={Compas} alt="Właściciel" />
                        <p>USA Massetusets</p>
                    </div>
                   

              
                
            </div>
            <div className="first-bar-container">
                <article>
                    <h2>O flagowym produkcie, czas na 
                        <b className="orange-link"> Tyskie!</b></h2>
                    <p>Bracia słynną z produkcji piw z gaturnku Lager. Wyjątkowo dobrym produktem jest 
                        piwo Tyskie. W jego smaku da się wyczuć wyrazistą nutkę słodu jęczmiennego z bogatym
                        dodatkiem chmielu. <span className="orange-link">Czytaj więcej</span>
                    </p>
                </article>
                <img src={Image} alt="Zdjęcie" />
            </div>
            <button className="oth-beers-button">Inne piwo</button>
            <h2 className="award-header">Nagrody użytkowników
                <i className="fa fa-info"></i>
            </h2>
            <div className="other-beers-container">
               {rewards.map(r => {
                   return (<div style={{backgroundImage: `url(${r.img})`}}>
                        <span>{r.desc}</span>
                    </div>);
               })}

            </div>
            <h1 className="company-story-header">Historia firmy</h1>
            <div style={{backgroundImage: `url(${BeerFactoryBackground})`}} className="company-story-container">

                <article>
                    <span>Firma</span> <b className="orange-link">Bracia </b> posiada aż trzydzieści trzy marki piwa w swoim spichlerzu.
                    Powstała w <b className="orange-link">1943 roku</b> założona przez Piotra Bratowskiego. W początkowym etepie zatrudniała zaledwie 15 osób, a jej budżet
                    opierał się na wpłatach przez pasjonatów. Firma aktualnie wiedzie prym
                    w zachodniej Europie. Jej cały budżet w tym roku przekroczył równoważność
                    budżetu browaru Tyskie oraz Warka połączonych razem.
                </article>
                
            </div>

            
        </div>
        

    </div>
);

export default beerGroupCart;