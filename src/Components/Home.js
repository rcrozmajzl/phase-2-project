import React from 'react';
import arrow from '../assets/arrow.png'

function Home() {

    return (
        <div className="home">
            <h2>Welcome!</h2>
            <br/>
            <h4>Here you can explore our collection of inspirational quotes to help you find the peace, encouragement, and motivation you need</h4>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <h4>Browse any of our pre-selected authors by category along the left side of your screen</h4>
            <br/>
            <br/>
            <img className="arrow" src={arrow} alt="arrow"/>
        </div>
    )
}

export default Home;
