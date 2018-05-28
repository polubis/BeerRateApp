import React, { Component } from 'react';
import './_circle.css';
import Image from '../../../assets/BeerBackground.jpg';
import Aux from '../../../hoc/auxilary';

class Circle extends Component{
    state = {
        items: [],
        actualBlock: 0,
        actualBlockIndex: 0,
        scale: 1
    }
    componentDidMount(){
        const items = [
            {id: 0, name: "Kraj", value: this.props.country, classVal: false, deg: 45, desc: "Piwo produkowane jest w Polsce. Produkcje rozpoczeto w 1994 roku i trwa do dzis"},
            {id: 1, name: "Dystrybucja", value: this.props.distribution,classVal: false, deg: 90, desc: "Dystrybucja regionalna. W okolicach miasteczka Bronowice"},
            {id: 2, name: "Typ", value: this.props.kindOf,classVal: false, deg: 135, desc: "Piwo Tyskie jest typowym Przenicznym piwem."},
            {id: 3, name: "Kolor", value: this.props.color,classVal: false, deg: 180, desc: "Posiada ciemno-brązową barwe, która po wlaniu do szklanki zmienia kolor"},
            {id: 4, name: "Rodzaj", value: this.props.type, classVal: false, deg: 225, desc:"Piwo Tyskie to typowy Lagger"},
            {id: 5, sp: " %", name: "IBU", value: this.props.ibu,classVal: false, deg: 270, desc: "Współczynnik IBU czyli poziom goryczy jest w tym piwie wyjątkowo niski. Wynosi. 4.5%"},
            {id: 6, sp: " zł", name: "Cena", value: this.props.price,classVal: false, deg: 315, desc: "Cena w wiekszosci sklepow waha sie pomidzy 2,30 zł a 4 zł"},
            {id: 7, name: "Zawartośc alkoholu", value: this.props.alcohol  + " %",classVal: false, deg: 360, desc: "Posiada 4.5% zawartośc alkoholu. Jest bardzo długo ważone"},
        ]
        if(this.state.items.length === 0){
            this.setState({items: items});
        }
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
            <Aux>
                {this.state.items.length > 0 ? 
                    <div style={{backgroundImage: `url(${Image})`}} className="circle-background">
                        <div style={{transform: `scale(${this.state.scale})`}}>
                            <article>
                                {this.state.items[this.state.actualBlockIndex].desc}
                            </article>
                        </div>
                        <ul className="circle" style={{transform: `rotate(${this.state.actualBlock}deg)`}}>
                        
                            {this.state.items.map(i => {
                                return <li style={{transform: `rotate(-${this.state.actualBlock}deg)`}} 
                                   
                                    onClick={() => this.changeClassOnClick(i.id)} 
                                    key={i.name}><span>{i.name}</span><b> {i.value === 0 ? null : i.value} {(i.value !== 0 && i.sp) ? i.sp : null}</b></li>
                            })}
                        </ul>
                    </div>
                : null } 
               
            </Aux>
            
            
        );
    }
}
export default Circle;