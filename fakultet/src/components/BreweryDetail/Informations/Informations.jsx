import React from 'react';
import './Informations.css';
import Aux from '../../../hoc/auxilary';
import Shield from '../Shield/_shield';
import Image from '../../../assets/modal/modal-group.jpg';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import BeerIcon from '../../../assets/icons/beer-icon.png';
import MapIcon from '../../../assets/beer-group-details/map.png';


const informations = props => (
        <Aux>
            <div className="details-left">
                <p>{props.name} <span>powstał w 1994 roku</span></p>
                <h1>Piwo ważone z rozwagą</h1>
                <article>
                    {props.desc}
                    dadasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                    dadasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                    dadasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                    dadasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                    adasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                    dadasdsaa a sadasd as a ads a a sad a ada a asdsa a
                    dadaad sa ada dada a ada asd asdsa as asdsa  s sa
                </article>
                <Shield 
                BeerIcon={BeerIcon}
                MapIcon={MapIcon}
                GroupIcon={GroupIcon}/>     
            </div>
            <div style={{backgroundImage: `url(${Image})`}} className="details-right-picture">
            </div>                
        </Aux>
);


export default informations;