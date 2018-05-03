import React from 'react';
import './_commentSection.css';
import Img from '../../../assets/background.jpg';
import Stars from '../../../components/_stars/_stars';

const comments = [
    {id: 0, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 1, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 2, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 3, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 4, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35},
    {id: 5, date: "1994-12-19 16:45", author: "Piotr Siemaneczko", img: Img, content: "Niesamowite piwo nprawde cos pieknego serdecznie polecam ten trunek", rate: 4.35}
    
]

const commentSection = props => (
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
);

export default commentSection;