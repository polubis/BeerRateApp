import React, { Component } from 'react';
import './_circle.css';
import Image from '../../../assets/BeerBackground.jpg';


class Circle extends Component{
    state = {
        items: this.props.items,
        actualBlock: 0,
        actualBlockIndex: 0,
        scale: 1
    }
    changeClassOnClick = id => {
        const newItems = [...this.state.items];
        newItems[id].classVal = true;

        this.setState({scale: 0});

        setTimeout(() => {
            this.setState({scale: 1, items: newItems, actualBlock: this.state.actualBlock + 45, actualBlockIndex: id})
        }, 1000);
    }
    render(){
        return(
            <div style={{backgroundImage: `url(${Image})`}} className="circle-background">
                <div style={{transform: `scale(${this.state.scale})`}}>
                    <article>
                        {this.state.items[this.state.actualBlockIndex].desc}
                    </article>
                </div>
                <ul className="circle" style={{transform: `rotate(${this.state.actualBlock}deg)`}}>
                
                    {this.state.items.map(i => {
                        return <li style={{transform: `rotate(-${this.state.actualBlock}deg)`}} className={i.classVal ? "hiddenCircle" : null} 
                            onClick={() => this.changeClassOnClick(i.id)} 
                            key={i.name}><span>{i.name}</span><b> {i.value}</b></li>
                    })}
                </ul>
            </div>
            
        );
    }
}
export default Circle;