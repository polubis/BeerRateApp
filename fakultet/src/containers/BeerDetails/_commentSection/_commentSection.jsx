import React, { Component } from 'react';
import './_commentSection.css';
import Img from '../../../assets/background.jpg';
import Stars from '../../../components/_stars/_stars';
import Aux from '../../../hoc/auxilary';
import Button from '../../../components/UI/_button/_button';
import AddCommentSection from '../../../components/Comments/_addComment/_addComment';
import Transition from 'react-transition-group/Transition';
import { validateOneInput, validateRate } from '../../../services/validationMethods';
import { connect } from 'react-redux';
import { addCommentActionCreator, addComment } from '../../../store/Comments/Actions';
import { findIndexValue } from '../../../services/concatingUrlPath';


const voteStars = [
    {id: "1", isVotted: false},
    {id: "2", isVotted: false},
    {id: "3", isVotted: false},
    {id: "4", isVotted: false},
    {id: "5", isVotted: false}
];

class CommentSection extends Component{
    state = {
        commentValue: "",
        validationError: "",
        showAddComments: false,
        rateValue: null,
        voteStars: voteStars,


        addCommentSpinner: false,
        addCommentPrompt: false
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.addCommentErrors !== this.props.addCommentErrors){
            this.setState({addCommentSpinner: false});
        }
        if(nextProps.addCommentResult !== this.props.addCommentResult && 
            nextProps.addCommentResult === true){
            this.setState({addCommentPrompt: true});
            this.props.loadBeer(this.props.loadBeerId);

            setTimeout(() => {
                this.setState({addCommentPrompt: false});
                this.props.addCommentClear(null, []);
            }, 3500);
        }
    }
   

    showAddComments = () => {
        this.setState({showAddComments: true});
    }
    hideAddComments = () => {
        this.clearStarArray();
        this.setState({showAddComments: false, validationError: "", commentValue: ""});
    }

    clearStarArray = () => {
        const copiedArray = [...this.state.voteStars];
        this.props.addCommentClear(null, []);
        for(let key in copiedArray){
            copiedArray[key].isVotted = false;
        }
        this.setState({voteStars: copiedArray});
    }
    onChangeHandler = e => {
        const result = validateOneInput(e.target.value, false, "treśc komentarza", 5);
        if(result){
            this.setState({commentValue: e.target.value, validationError: result});
        }
        else{
            this.setState({commentValue: e.target.value, validationError: ""});
        }

    }

    changeRateHandler = e => {
        const newVotes = [...this.state.voteStars];
        for(let key in voteStars){
            if(voteStars[key].id === e.target.id){
                voteStars[key].isVotted = true;
            }
            else{
                voteStars[key].isVotted = false;
            }
        }
        this.setState({rateValue: e.target.id, voteStars: newVotes, 
            validationError: (this.state.validationError.search("Komenatrz") < 0 ? "" : this.state.validationError)});
    }
    publishHandler = () => {
        const commentResult = validateOneInput(this.state.commentValue, false, "treśc komentarza", 5);
        const rateResult = validateRate(this.state.rateValue);
        if(commentResult !== ""){
            this.setState({validationError: commentResult});
        }
        else if(rateResult !== ""){
            this.setState({validationError: rateResult});
        }
        else{
            this.setState({validationError: "", addCommentSpinner: true});
            const author = JSON.parse(localStorage.getItem('loggedUserData'));
            this.props.addComment(author.id, this.state.commentValue, findIndexValue(window.location.href), this.state.rateValue);
        }
    }
    isUserInCommentList = () => {
        const actualUser = JSON.parse(localStorage.getItem('loggedUserData'));
        for(let key in this.props.ratings){
            if(this.props.ratings[key].user.username === actualUser.username){
                return true;
            }
        }
        return false;
    }
    render(){
        const isUserInComments = this.isUserInCommentList();
        return(
            <Aux>
            <div className="comment-section">
            
            <h2>Komentarze użytkowników</h2>
            <div className="comments">
            
                {this.props.ratings.length > 0 ? this.props.ratings.map( c => {
                    return (
                        <div key={c.id} className="comment">
                            <p>
                                <b>{c.user.username}</b>
                                <span>{c.creationDate.slice(0, 10)}</span>
                            </p>
                            <div className="comment-content">
                                <div style={{backgroundImage: `url(${Img})`}} className="comment-avatar">
                                </div>
                                <article>
                                    {c.content}
                                </article>
                                
                            </div>
                            <div className="comments-stars">
                                <Stars fontSize="24px" rate={c.ratingValue}/>
                                <p><b>{c.ratingValue}</b></p>
                            </div>
                        
                        </div>
                    );
                }) : <p className="no-comments">Brak komentarzy</p>}
            </div>
            
            {isUserInComments ? <p className="commented-prompt">Te piwo zostało ocenione przez Ciebie</p> : 
            <Transition 
                mountOnEnter 
                unmountOnExit 
                in={this.state.showAddComments}
                timeout={1000}>
                    {state => (
                            <AddCommentSection 
                            addCommentResult={this.state.addCommentPrompt}
                            addCommentErrors={this.props.addCommentErrors}
                            addCommentSpinner={this.state.addCommentSpinner}
                            vote={e => this.changeRateHandler(e)}
                            votes={this.state.voteStars}
                            show={this.state.showAddComments}
                            publish={this.publishHandler}
                            value={this.state.commentValue}
                            change={e => this.onChangeHandler(e)}
                            showAddComments={this.showAddComments} 
                            hideAddComments={this.hideAddComments}
                            validationError={this.state.validationError}
                            />
                        )}
            </Transition>}
            

            {!isUserInComments ? 
            <Button 
            show={!this.state.showAddComments} 
            click={this.showAddComments} 
            title="Oceń piwo" 
            btnClass="add-comment-btn"/>  : null}
         
            
        
            

            
            </div>
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        addCommentErrors: state.CommentsReducer.addCommentErrors,
        addCommentResult: state.CommentsReducer.addCommentResult
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (authorId, content, beerId, rate) => dispatch(addCommentActionCreator(authorId, content, beerId, rate)),
        addCommentClear: (result, errors) => dispatch(addComment(result, errors))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);





