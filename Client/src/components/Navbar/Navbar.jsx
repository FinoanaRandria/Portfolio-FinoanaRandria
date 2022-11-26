import React from 'react'
import "../../App.css"
function Navbar() {
  return (
    <div>
        <header className='header' id="header">
            <nav className='nav container'>
                <a href='#'className='nav_logo'>Finoana Ranri</a>
                <div className='nav_menu' id="nav-menu">
                    <ul className='nav__list grid'>
                       <li className='nav_item'>
                            <a href='#' className='nav_link'></a> 
                       </li>
                    </ul>
                </div>
            </nav>
        </header>

    </div>
  )
}

export default Navbar