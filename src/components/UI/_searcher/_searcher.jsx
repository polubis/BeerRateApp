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
        {props.searchedCount > 0 ? 
        <p>Liczba znalezionych wyników: <b>{props.searchedCount}</b></p> : null}

        {(props.value !== "" && props.searchedCount === 0) ? <p className="not-found-prompt">Brak znalezionych wyników</p> : null}
    </div>
        
    );
    
};

export default searcher;