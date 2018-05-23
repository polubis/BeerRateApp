import React from 'react';
import './_minAwards.css';




const minAwards = props => (
    <div className="min-awards-container" style={{flexFlow: props.flex, height: props.height, width: props.width}}>
        {props.items.map(i => {
            return (
                <div key={i.id}>
                    <img onClick={props.clicked} onMouseOut={props.out} id={i.id} src={i.img} alt={i.title} />
                </div>
            );
        })}

        
    </div>
);

export default minAwards;