import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Category from './Components/Category';
import AuthorCard from './Components/AuthorCard';
import SearchResult from './Components/SearchResult';


function App() {

      const [quotesInfo, setQuotesInfo] = useState([]);
    
      const QUOTESDATABASE = 'http://localhost:8001/quotes';
  
      useEffect(() => {
          fetch(QUOTESDATABASE)
          .then(res => res.json())
          .then(quotesData => setQuotesInfo(quotesData))
      }, [])

  return (
    <div className="App">
      <Header />
      <NavBar quotesInfo={quotesInfo}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:categoryId">
          <Category />
        </Route>
        <Route exact path="/author/:authorId">
          <AuthorCard />
        </Route>
        <Route path="/search">
          <SearchResult />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
