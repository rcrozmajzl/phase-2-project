import React from 'react';

function Search( { onSearchInput, searchText }) {

    function handleSearch(event) {
        onSearchInput(event.target.value);
    }

    return (
        <div className='search'>
            <input 
                type='text' 
                name='search' 
                placeholder='Author...' 
                value={searchText}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search