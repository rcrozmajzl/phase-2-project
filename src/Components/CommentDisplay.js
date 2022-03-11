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
            <div className="individualComment">
                {content}
                <button className="delete-Btn"  onClick={handleDeleteBtn} >X</button>
            </div>
        </div>
    )
}

export default CommentDisplay;
