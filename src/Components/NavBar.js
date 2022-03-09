import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h3>idk what we want to put here this is just filler</h3>
            <ul className="nav-links">
                <NavLink exact to="/artists-authors-entertainers" >
                    <li>Artists, Authors, and Entertainers</li>
                </NavLink>
                <NavLink exact to="/athletes">
                    <li>Athletes</li>
                </NavLink>
                <NavLink exact to="/financial-gurus">
                    <li>Financial Gurus</li>
                </NavLink>
                <NavLink exact to="/philosophers-religious-figures">
                    <li>Philosophers and Religious Figures</li>
                </NavLink>
                <NavLink exact to="/political-figures">
                    <li>Political Figures</li>
                </NavLink>
                <NavLink exact to="/tech-icons-and-inventors">
                    <li>Tech Icons and Inventors</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar