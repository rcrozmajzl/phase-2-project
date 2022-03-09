import React from 'react'

function CommentForm({ handleSubmit, commentInput, setCommentInput }) {
    return (
        <div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="comment"
                    placeholder="Comment"
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm;
