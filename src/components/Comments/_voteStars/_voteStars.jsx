import React from 'react';
import './_voteStars.css';




const voteStars = props => (
    <div className="vote-stars-container">
        {props.votes.map(i => {
            return <i id={i.id} key={i.id} onClick={props.vote} 
            className={i.isVotted ? "fa fa-star voted" : "fa fa-star"}></i>
        })}
    </div>
);

export default voteStars;