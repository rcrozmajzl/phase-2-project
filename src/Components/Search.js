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
                className="form-input"
                type='text' 
                name='search' 
                placeholder='Search by author...' 
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            <button className="submit-button" type="submit">&#x1F50E;&#xFE0E;</button>
        </form>
    )
}

export default Search;