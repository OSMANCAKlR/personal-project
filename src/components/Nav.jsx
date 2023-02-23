import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Nav() {
  return (
    <nav>
    <div className="row">
       <div className="nav__image">
        <Link to="/">
            <img src={Logo} alt="" className="logo" />
        </Link>
        </div>
         <div className="nav__links">
            <ul>
                <li>
                    <Link to="/" className="nav__link" href="">Home</Link>
                    <Link to="/menu" className="nav__link" href="">Menu</Link>
                    <Link to="/more" className="nav__link" href="">More</Link>
                    <Link to="/cart" className="account__link" href="">
                        <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />
                    </Link>
                </li>
            </ul>
        </div> 
    </div>
</nav>
  )
}
