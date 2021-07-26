import React from 'react';
import  './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
        <header className='Header'>
            <h1 >Football Statistics</h1>
            <nav className="header__menu">
                <ul className="menu__list">
                    <li><a href="#table" class="menu__item">table</a></li>
                    <li><a href="#teams" class="menu__item">teams</a></li>
                </ul>
            </nav>
        </header>
        {children}
        <footer></footer>
        </>
    )
}
export default Layout;