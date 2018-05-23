import React from 'react';
import './_slicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slicker = props => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    };

    
    return (
    <Slider className={props.classy} {...settings}>
        {props.children}            
    </Slider>       
    );
}



export default slicker;
