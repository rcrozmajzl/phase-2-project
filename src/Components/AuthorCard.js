import React from 'react';
import { useParams} from 'react-router-dom';

function AuthorCard() {

    const {authorId} = useParams();
    console.log(authorId)
    return (
        <div>AuthorCard</div>
    )
}

export default AuthorCard