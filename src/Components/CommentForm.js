import React from 'react'

function CommentForm() {
    return (
        <div>
            <form className="comment-form" onSubmit={() => console.log('Submit')}>
                <input
                    type="text"
                    id="comment"
                    placeholder="Comment"
                    value=""
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentForm