import React from 'react';
import './_addComment.css';
import Button from '../../UI/_button/_button';
import Chaos from '../../UI/_chaos/_chaos';
import ValidationError from '../../UI/_validationError/_validationError';
import VoteStars from '../../Comments/_voteStars/_voteStars';

const addComment = props => (
    <div className={props.show ? "add-comment-section add-comment-in" : "add-comment-section add-comment-out"}>
        <p className="add-comment-header">
            <b>Dodaj opinie</b>
            <i onClick={props.hideAddComments} className="fa fa-close"></i>
        </p>
        
        <textarea onChange={props.change} placeholder="wpisz treśc komentarza" value={props.value}>
                        
        </textarea>

        
        <VoteStars vote={props.vote} votes={props.votes}/>
        <div>
            {props.validationError ? 
            <ValidationError fontSize="20px" message={props.validationError}/>
            : null}
        </div>

        <Button click={props.publish} show={props.show} title="Opublikuj" btnClass="add-comment-btn"/>
    </div>

);

export default addComment;