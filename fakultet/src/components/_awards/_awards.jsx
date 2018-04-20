import React from 'react';
import Aux from '../../hoc/auxilary';
import './_awards.css';

import Cup from '../../assets/beer-rewards/cup.png';
import FirstPlace from '../../assets/beer-rewards/first-place.png';
import ManGift from '../../assets/beer-rewards/prezent.png';
import WomanFav from '../../assets/beer-rewards/woman-fav.png';



const awards = props => {
    
    const rewards = [
        {id: 0, desc: "Ulubieniec kobiet", img: WomanFav},
        {id: 1, desc: "Idealny dla mężczyzn", img: ManGift},
        {id: 2, desc: "Pierwsze miejsce w rankingu!", img: FirstPlace},
        {id: 3, desc: "Złota trójka", img: Cup}
    ];
    return(
    <Aux>
        <h2 style={{display: props.noHeader ? 'none' : 'block'}} className="award-header">Nagrody użytkowników
            <i className="fa fa-info"></i>
        </h2>
        <div className="other-beers-container">
                {rewards.map(r => {
                    return (<div key={r.id} style={{backgroundImage: `url(${r.img})`}}>
                            <span>{r.desc}</span>
                        </div>);
                })}
        </div>        
    </Aux>
    );
    
   
};


export default awards;