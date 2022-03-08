import React, { useState } from 'react';
import AuthorCard from './AuthorCard';

// we should probably do the fetching and setting state in NavBar so it's 
//available to all categories, then pass down quotes as prop to here

function CatArtistsAuthorsEntertainers({ authors }) {

    const [quotes, setQuotes] = useState([])

    const {id} = authors;

    function handleClick() {
        fetch(`https://api.fisenko.net/v1/authors/en/${id}/quotes?query=&limit=1&offset=0`)
        .then(response => response.json())
        .then(quotesData => setQuotes(quotesData))
    }

    return (
        <div>
            <h1>Artists, Authors, and Entertainers</h1>
            <h2 onClick={handleClick}>Lady Gaga</h2>
            <h2 onClick={handleClick}>Another artist</h2>
            <h2 onClick={handleClick}>Another one</h2>
            <h2 onClick={handleClick}>One more</h2>
            <h2 onClick={handleClick}>Just one more</h2>
            <AuthorCard quotes={quotes}/>
        </div>
    )
}

export default CatArtistsAuthorsEntertainers