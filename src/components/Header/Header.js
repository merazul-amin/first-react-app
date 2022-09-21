import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='menu'>
            <h1>Welcome to my Countries</h1>
            <nav>
                <a href="./home">Home</a>
            </nav>
        </div>
    );
};

export default Header;