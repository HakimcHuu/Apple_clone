import React from 'react'
import logo from '../../commonResource/images/icons/logo-sm.png'
import search from '../../commonResource/images/icons/search-icon-sm.png'
import cart from '../../commonResource/images/icons/cart-sm.png'

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button 
            className="navbar-toggler navbar-toggler-right" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} alt="Apple Logo" />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Mac</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">iphone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">ipad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">tv</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Music</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  <img src={search} alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  <img src={cart} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
