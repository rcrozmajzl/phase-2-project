import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';

function Comments() {

    const [commentArray, setCommentArray] = useState([]);

    const comment = commentArray.map(comments => <CommentDisplay key={comments.id} {...comments} /> )

    return (
        <div>
            {comment}
            <CommentForm />
        </div>
    )
}

export default Comments;
