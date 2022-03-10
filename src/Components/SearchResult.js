import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {categories} from '../categories';

function SearchResult() {

    const {search} = useLocation();
    // class available in the browser
    const authorName = new URLSearchParams(search).get('authorName')


    const allAuthors = categories.map((category) => category.authors).flat()
    const matchingAuthors = allAuthors.filter((author) => author.authorName.toLowerCase().includes(authorName.toLowerCase()))

    const authorLinks = matchingAuthors.map((author) => <Link key={author.authorId} to={`/author/${author.authorId}`}> 
    <h2 className="authorLinks">{author.authorName}</h2> </Link>)
    
    // if (matchingAuthors === undefined) {
    //     return <h2>Ooops we don't have that Author!</h2>;
    // }

    return (
        <div>
            <h2>Searched Authors</h2>
            {authorLinks}
        </div>
    )
}

export default SearchResult;