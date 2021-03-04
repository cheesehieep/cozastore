import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../../assets/images/logo.webp';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const carts = useSelector(state => state.carts);

  window.onscroll = () => {
    window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
  };

  return (
    <section className={"Navbar" + (sticky ? " sticky" : "")}>
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <ul className="Navbar-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart <sup>({carts.length})</sup></Link></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="Navbar-icon">
          <i className="fas fa-search" />
          <i className="fas fa-shopping-cart" />
          <i className="far fa-heart" />
        </div>
        <div className="Navbar-hamburger">
          <svg fill="#000" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
