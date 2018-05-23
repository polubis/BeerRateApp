import React from 'react';
import './_beerGroup.css';
import Awards from '../../_awards/_awards';
import BeerGroupFormInfo from '../../../components/_beerGroupCart/_beerGroupFormInfo/_beerGroupFormInfo';
import GroupIcon from '../../../assets/icons/brewery-group.png';
import { groups } from '../../../consts/links/pictures';
import { Link } from 'react-router-dom';
const beerGroup = props => (
            <div className="beer-group-line">
                <div className="group-image-title">
                    <img className="image-line" src={GroupIcon} alt="Grupa" />
                    <h1>Bracia</h1>
                </div>
                <h2>Informacje o <b>grupie piwowarskiej</b></h2>
                <h3>Historia</h3>
                <div style={{backgroundImage: `url(${props.group.brewingGroupPicture ? 
                    groups + props.group.brewingGroupPicture.pictureName : null})`}} className="desc-holder-picture">
                    <article>
                        {props.group.description}
                    </article>
                </div>
                
                <BeerGroupFormInfo director={props.group.director} createDate={props.group.createDate.slice(0, 10)} 
                address={props.group.address}/>
                <h3>Nagrody za wszystkie marki piwa</h3>
                <Awards noHeader={true}/>
                
                <Link className="group-link" to={`/grupy/${props.group.id}`}>
                    Zobacz szczegóły
                </Link>
            </div>
);

export default beerGroup;