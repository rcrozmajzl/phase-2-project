import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import authors from '../../authors.json';

function Home() {

    const [searchText, setSearchText] = useState('');

    function onSearchInput(searchedValue) {
        setSearchText(searchedValue)
    }

    const authorToDisplay = authors.filter((author) => author.name.toLowerCase().includes(searchText.toLowerCase()))

    // sending authors and authorToDisplay down to NavBar to pass down to Categories
    return (
        <div>
            <Header onSearchInput={onSearchInput}/>
            <NavBar authorToDisplay={authorToDisplay} authors={authors}/> 
        </div>
    )
}

export default Home;
