import React, { Component } from 'react';
import './_commentSection.css';
import Img from '../../../assets/background.jpg';
import Stars from '../../../components/_stars/_stars';
import Aux from '../../../hoc/auxilary';

const comments = [
    {id: 0, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 1, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 2, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 3, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 4, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 5, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35}
    
]

class CommentSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            isFixed: false
        }
        this.windowScrollHandler = this.windowScrollHandler.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.windowScrollHandler);
        window.addEventListener('resize', this.handleWindowResize = this.handleWindowResize.bind(this));
        this.handleWindowResize();
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.windowScrollHandler);
        window.removeEventListener('resize', this.handleWindowResize = this.handleWindowResize.bind(this));
        
    }
    handleWindowResize = () => {
        if(document.body.clientWidth <= 1600){
            this.setState({isFixed: false});
        }
    }
    windowScrollHandler = () => {
        if(document.body.clientWidth > 1600){
            if(window.scrollY > 800){
                this.setState({isFixed: true});
            }
            else{
                this.setState({isFixed: false});
            }
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
            
            </div>
            </Aux>
            
        );
    }
}

export default CommentSection;