import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';

const API = "http://localhost:8001/comments"

function Comments() {

    const [commentArray, setCommentArray] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const comment = commentArray.map(comments => <CommentDisplay key={comments.id} {...comments} />)

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCommentArray(data))
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const commentData = {content: commentInput}
        const newComment = [...commentInput, commentData]

        setCommentInput("")
            fetch(API, {
                method: "POST",
                headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify()
            })
            .then(res => res.json())
            .then(comment => setCommentArray([...commentArray, comment]))
        }

    return (
        <div>
            {comment}
            <CommentForm 
                handleSubmit={handleSubmit}
                setCommentInput={setCommentInput}
                commentInput={commentInput}
            />
        </div>
    )
}

export default Comments;
