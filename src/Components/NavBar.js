import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { categories } from '../categories';
import logo from '../assets/logo.png';
import Search from './Search';


// by clicking on the logo you go back to Home, aka Link to='/'

function NavBar() {


    const categoryComponents = categories.map((category) => <NavLink key={category.id} exact to={`/category/${category.id}`} > <li>{category.type}</li> </NavLink>)


    

    return (
        <div className="navDiv">
            <nav>
                <div>
                    <Link to='/'>
                        <img className="logo" src={logo} alt='logo' />
                    </Link>
                </div>
                <Search />
                <ul className="nav-links">
                    {categoryComponents}
                </ul>
                <div>
                    <br/>
                    <br/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar