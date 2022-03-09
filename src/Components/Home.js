import React, { useEffect, useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';

function Home() {

    // const [searchText, setSearchText] = useState('');
    const [quotes, setQuotes] = useState([]);
    
    const DATABASE = 'http://localhost:8001/quotes';

    useEffect(() => {
        fetch(DATABASE)
        .then(res => res.json())
        .then(quotesData => console.log(quotesData))
    }, [])

    // function onSearchInput(searchedValue) {
    //     setSearchText(searchedValue)
    // }

    // const authorToDisplay = authors.filter((author) => author.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <div>
            <Header />
            <NavBar quotes={quotes}/> 
        </div>
    )
}

export default Home;
