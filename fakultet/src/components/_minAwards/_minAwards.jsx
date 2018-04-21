import React from 'react';
import './_minAwards.css';




const minAwards = props => (
    <div className="min-awards-container">
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