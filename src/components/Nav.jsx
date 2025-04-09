import React from 'react'
import Intro from "../assets/Intro.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='row'>
        <ul className='nav__links'>
            <li className='nav__link'>
                <Link to="/" className="nav__title">
                SKINSTRIC
                </Link>
            </li>
            <li classname="nav__link">
                <img src={Intro} alt="Intro" />
            </li>
        </ul>
    </nav>
  )
}

export default Nav 