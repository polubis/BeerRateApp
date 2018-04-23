import React from 'react';
import './_searcher.css';

const searcher = props => {
    return (
    <div className="search-container">
        <input style={{width: props.width}}
        type="text"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        value={props.value}
        maxLength={props.max}
        />
    </div>
        
    );
    
};

export default searcher;