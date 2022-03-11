import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Quote from './Quote';
import Comments from './Comments';
import { categories} from '../categories';
import quotes from '../assets/quotes.png'

function AuthorCard() {

    const [quotesByAuthor, setQuotesByAuthor] = useState([])
    const {authorId} = useParams();

    useEffect(() => {
        fetch('http://localhost:8001/quotes')
        .then(response => response.json())
        .then(quotes => filterQuotesByAuthorId(quotes))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function filterQuotesByAuthorId(quotes) {
        const filteredQuotes = quotes.filter((quote) => quote.authorId === parseInt(authorId))
        setQuotesByAuthor(filteredQuotes)
    }

    const authorName = getAuthorNameById(authorId)
    const eachQuote = quotesByAuthor.map((singleQuote) => <Quote key={singleQuote.id} quoteText={singleQuote.quoteText}/>)

    if (authorName === undefined) {
        return <h2>Author not found!</h2>;
    }

    return (
        <div className="authorCard">
            <h2>{authorName}</h2>
            <hr/>
            <br/>
            <br/>
            <div className="authorCardDiv">
                <div className="quotesDiv">
                <img className="quotes-image" src={quotes} alt="quotes" />
                    {eachQuote}
                </div>
                <div className="commentsDiv">
                    <Comments />
                </div>
            </div>
        </div>
    )
}

function getAuthorNameById(authorId) {
    const currentAuthor = categories.map((category) => category.authors).flat()
    .find((author) => author.authorId === parseInt(authorId));
    return currentAuthor?.authorName;
}

export default AuthorCard;