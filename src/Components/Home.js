import React from 'react';
import arrow from '../assets/arrow.png'

function Home() {

    return (
        <div className="home">
            <h2>Welcome to Get Inspired!</h2>
            <p>Here you can explore our collection of inspirational quotes to help you find the peace, encouragement, and motivation you need!</p>
            <h3>Browse any of our pre-selected authors by category along the left side of your screen!</h3>
            <img className="arrow" src={arrow} alt="arrow"/>
        </div>
    )
}

export default Home;
