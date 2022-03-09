import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Category from './Components/Category';
import AuthorCard from './Components/AuthorCard';
import Comments from './Components/Comments';


function App() {

      // const [searchText, setSearchText] = useState('');
      const [quotesInfo, setQuotesInfo] = useState([]);
    
      const DATABASE = 'http://localhost:8001/quotes';
  
      useEffect(() => {
          fetch(DATABASE)
          .then(res => res.json())
          .then(quotesData => setQuotesInfo(quotesData))
      }, [])

      console.log(quotesInfo)
      // function onSearchInput(searchedValue) {
      //     setSearchText(searchedValue)
      // }
  
      // const authorToDisplay = authors.filter((author) => author.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="App">
      <Header />
      <NavBar quotesInfo={quotesInfo}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:category">
          <Category />
        </Route>
        <Route exact path="/:author">
          <AuthorCard />
        </Route>
        <Route exact path="/:author/comments">
          <Comments />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
