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

    const authorLinks = authors.map((author) => <Link key={author.authorId} to={`/author/${author.authorId}`}> <li>{author.authorName}</li> </Link>)

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