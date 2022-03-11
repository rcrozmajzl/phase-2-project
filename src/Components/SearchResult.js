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
    <li className="authorSearchLinks">{author.authorName}</li> </Link>)
    
    // if (matchingAuthors === undefined) {
    //     return <h2>Ooops we don't have that Author!</h2>;
    // }

    return (
        <div className="searchResultsComponent">
            <h2>Searched Authors</h2>
            <div className="searchResultsDiv">
                <ul className="list">
                    {authorLinks}
                </ul>
            </div>
            <div>
                <br/>
            </div>
        </div>
    )
}

export default SearchResult;