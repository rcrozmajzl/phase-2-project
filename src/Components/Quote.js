import React from 'react'


function Quote({ quoteText }) {
    return (
        <div className="single-quote-display"> 
            <div className="quote">
                <p>"{quoteText}"</p>
            </div>
        </div>
    )
}

export default Quote