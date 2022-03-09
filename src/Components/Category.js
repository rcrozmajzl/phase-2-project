import React from 'react';
import { Link } from 'react-router-dom';

function Category({ type, authors }) {
    
    const authorLinks = authors.map((author) => <Link key={author} author={author} to="/:author"/>)
    return (
        <div>
            <h1>{type}</h1>
            <ul>
                {authorLinks}
            </ul>
        </div>
    )
}

export default Category;