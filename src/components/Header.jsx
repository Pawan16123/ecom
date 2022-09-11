import React from 'react';
import {NavLink, Link} from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";
import Cart from './Cart';

export default function Header() {
  return (
    <header>
       <NavLink to="/"> <img src="/images/logo.png" alt="Logo iconnect" /></NavLink>
        <input type="search" />
        <ul>
          <li className="nav-item">
            <NavLink  to="/cart"><FaCartArrowDown/>Cart</NavLink>
          </li>
        </ul>
    </header>
  )
}
