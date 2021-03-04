import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(state => state.user);

  return (
    <section className="Header">
      <div className="Header-container">
        <div className="Header-left">
          <p>Free shipping for standard order over $100</p>
        </div>
        <ul className="Header-right">
          <li><a href="#">Help &amp; FAQs</a></li>
          <li>{user ? <Link to="/admin">Dashboard</Link> : <Link to="/login">Login</Link>}</li>
          <li><a href="#">EN</a></li>
          <li><a href="#">USD</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
