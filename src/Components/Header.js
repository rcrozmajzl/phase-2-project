import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../logo.svg'; // need to fix this
import Search from './Search';

// by clicking on the logo you go back to Home, aka Link exact to='/'
function Header() {
    return (
        <div className='header'>
            <Link exact to='/'>
                <img src={logo} alt='logo' />
            </Link>
            <h1>Get Inspired</h1>
            <Search />
        </div>
    )
}

export default Header;