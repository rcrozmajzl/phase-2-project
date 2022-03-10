import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Search() {

    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    function handleSearchSubmit(event) {
        event.preventDefault();
        history.push(`/search?authorName=${searchText}`)
        setSearchText('')
    }
        
    return (
        <form className="search-form" onSubmit={handleSearchSubmit}>                
            <input 
                type='text' 
                name='search' 
                placeholder='Search by author...' 
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;