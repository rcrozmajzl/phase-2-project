import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../categories';

function NavBar() {

    const categoryComponents = categories.map((category) => <NavLink key={category.id} exact to={`/category/${category.id}`} > <li>{category.type}</li> </NavLink>)
    return (
        <nav>
            <h3>idk what we want to put here this is just filler</h3>
            <ul className="nav-links">
                {categoryComponents}
            </ul>
        </nav>
    )
}

export default NavBar