import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';

const API = "http://localhost:8001/comments"

function Comments() {

    const [commentArray, setCommentArray] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const {authorId} = useParams();

    const comment = commentArray.filter((comments) => comments.authorId === authorId)
    .map(comments => <CommentDisplay key={comments.id} {...comments} />)

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCommentArray(data))
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const commentData = {content: commentInput, authorId}

        setCommentInput("")
            fetch(API, {
                method: "POST",
                headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify(commentData)
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
