import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories} from '../categories';

function Category() {


    const {categoryId} = useParams();

    const category = categories.find((category) => category.id === parseInt(categoryId))

    if (category === undefined) {
        return <h2>Category not found!</h2>;
    }

    const {type, authors} = category;

    const authorLinks = authors.map((author) => 
        <Link key={author.authorId} to={`/author/${author.authorId}`}> 
            <h2 className="authorLinks">{author.authorName}</h2> 
        </Link>)

    return (
        <div className="category">
            <h2>{type}</h2>
            <div className="authorNamesDiv">
                <div>
                    {authorLinks}
                </div>
            </div>
        </div>
    )
}

export default Category;