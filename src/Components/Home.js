import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import authors from '../../authors.json';

function Home() {

    const [searchText, setSearchText] = useState('');
    const [quotes, setQuotes] = useState([]);
    
    const {id} = authors;

    function onSearchInput(searchedValue) {
        setSearchText(searchedValue)
    }

    function onAuthorClick() {
        fetch(`https://api.fisenko.net/v1/authors/en/${id}/quotes?query=&limit=1&offset=0`)
        .then(response => response.json())
        .then(quotesData => setQuotes(quotesData))
    }

    const authorToDisplay = authors.filter((author) => author.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            <Header onSearchInput={onSearchInput}/>
            <NavBar authorToDisplay={authorToDisplay} quotes={quotes} onAuthorClick={onAuthorClick}/> 
        </div>
    )
}

export default Home;
