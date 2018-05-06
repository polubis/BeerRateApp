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
import { addCommentActionCreator } from '../../../store/Comments/Actions';
import { findIndexValue } from '../../../services/concatingUrlPath';

const comments = [
    {id: 0, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 1, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 2, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 3, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 4, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 5, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35}
    
]

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


        addCommentSpinner: false
    }
    componentDidUpdate(prevProps){
        if(prevProps.addCommentErrors !== this.props.addCommentErrors){
            this.setState({addCommentSpinner: false});
        }
    }

    showAddComments = () => {
        this.setState({showAddComments: true});
    }
    hideAddComments = () => {
        this.setState({showAddComments: false, validationError: "", commentValue: ""});
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

            this.props.addComment(author.id, this.state.commentValue, findIndexValue(window.location.href));
        }
    }

    render(){
        return(
            <Aux>
            <div className="comment-section">
            <h2>Komentarze użytkowników</h2>
            <div className="comments">
            {comments.map( c => {
                return (
                    <div key={c.id} className="comment">
                        <p>
                            <b>{c.author}</b>
                            <span>{c.date}</span>
                        </p>
                        <div className="comment-content">
                            <div style={{backgroundImage: `url(${Img})`}} className="comment-avatar">
                            </div>
                            <article>
                                {c.content}
                            </article>
                            
                        </div>
                        <div className="comments-stars">
                            <Stars fontSize="24px" rate={c.rate}/>
                            <p><b>{c.rate}</b></p>
                        </div>
                       
                    </div>
                );
            })}
            </div>
            
            
            <Transition 
                mountOnEnter 
                unmountOnExit 
                in={this.state.showAddComments}
                timeout={1000}>
                    {state => (
                            <AddCommentSection 
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
            </Transition>

            
            <Button 
            show={!this.state.showAddComments} 
            click={this.showAddComments} 
            title="Oceń piwo" 
            btnClass="add-comment-btn"/>
         
            

            

            
            </div>
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        addCommentErrors: state.CommentsReducer.addCommentErrors
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (authorId, content, beerId) => dispatch(addCommentActionCreator(authorId, content, beerId))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);





