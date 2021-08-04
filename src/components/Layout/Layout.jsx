import React from "react";
import "./Layout.css";
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
      <>
      <header>
        <h1>Football Statistics</h1>
        <nav className="header__menu">
          <ul className="menu__list">
            <li>
              <NavLink to="/table" className="menu__item">
                table
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" className="menu__item">
                teams
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
        {children}

      <footer></footer>
      </>
  );
};
export default Layout;
