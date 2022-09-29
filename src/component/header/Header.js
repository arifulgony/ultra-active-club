import React from 'react';
import'./Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>
            <h1 className='header-title'> <FontAwesomeIcon icon={faTrophy}></FontAwesomeIcon>  World-Active-club</h1>
            <h2>Select today’s hobby</h2>
        </div>
    );
};

export default Header;