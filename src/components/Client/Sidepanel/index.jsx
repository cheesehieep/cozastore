import React from 'react';

const Sidepanel = () => {
  return (
    <section className="Sidepanel">
      <div className="Sidepanel-container">
        <div className="Sidepanel-icon-close">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#212529" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
        </div>
        <ul className="Sidepanel-list">
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="cart.html">Features</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Sidepanel;
