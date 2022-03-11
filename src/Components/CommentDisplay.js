import React from 'react'

function CommentDisplay({ id, content, handleDelete }) {

    function handleDeleteBtn() {
        console.log();
        fetch(`http://localhost:8001/comments/${id}` , {
            method: 'DELETE',
        })
        handleDelete(id)
    };

    return (
        <div>
            {content}
            <button className="delete-Btn"  onClick={handleDeleteBtn} >X</button>
        </div>
    )
}

export default CommentDisplay;
