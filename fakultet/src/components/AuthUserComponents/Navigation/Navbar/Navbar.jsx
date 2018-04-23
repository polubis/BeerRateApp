import React from 'react';
import './Navbar.css';
import Logo from '../../../UI/_logo/_logo';
import Searcher from '../../../UI/_searcher/_searcher';


const navbar = props => (
     <div className="main-page-navbar">
        <Searcher />
        

        <Logo  />
    </div>
   
);

export default navbar;