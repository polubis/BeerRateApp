import React from 'react';
import './_searcher.css';
import { generatingPlaceholder } from '../../../services/generatingPlaceholder';

const searcher = props => (
    <div className="search-container">
        <input type="text" placeholder={generatingPlaceholder(window.location.href)}/>
    </div>
);

export default searcher;