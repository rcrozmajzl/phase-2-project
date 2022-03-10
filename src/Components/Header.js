import React from 'react';
import title from '../assets/title.png'
// import Search from './Search';

function Header() {

    return (
        <div className='header'>
            <img className="title" src={title} alt='title' />
            {/* <Search 
                onSearchInput={onSearchInput}
                searchText={searchText}
            /> */}
        </div>
    )
}

export default Header;