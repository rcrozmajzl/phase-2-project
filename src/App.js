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
      // const [categories, setCategories] = useState([])
    
      const QUOTESDATABASE = 'http://localhost:8001/quotes';
      // const CATEGORIESDATABASE = 'http://localhost:8001/categories';
  
      useEffect(() => {
          fetch(QUOTESDATABASE)
          .then(res => res.json())
          .then(quotesData => setQuotesInfo(quotesData))
      }, [])

    //   useEffect(() => {
    //     fetch(CATEGORIESDATABASE)
    //     .then(res => res.json())
    //     .then(categoriesData => setCategories(categoriesData))
    // }, [])


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
        <Route path="/category/:categoryId">
          <Category />
        </Route>
        <Route exact path="/author/:authorId">
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
