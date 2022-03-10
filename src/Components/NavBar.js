import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { categories } from '../categories';
import logo from '../assets/logo.png'

// by clicking on the logo you go back to Home, aka Link exact to='/'

function NavBar() {

    const categoryComponents = categories.map((category) => <NavLink key={category.id} exact to={`/category/${category.id}`} > <li>{category.type}</li> </NavLink>)
    return (
        <nav>
            <div>
                <Link to='/'>
                    <img className="logo" src={logo} alt='logo' />
                </Link>
            </div>
            <ul className="nav-links">
                {categoryComponents}
            </ul>
        </nav>
    )
}

export default NavBar