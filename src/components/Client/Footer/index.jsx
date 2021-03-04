import React from 'react';

const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer-container">
        <div className="Footer-list">
          <div className="Footer-list-item">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Watches</a></li>
            </ul>
          </div>
          <div className="Footer-list-item">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="Footer-list-item">
            <h4>Get in touch</h4>
            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            <div className="Footer-item-social">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
            </div>
          </div>
          <div className="Footer-list-item">
            <h4>NEWSLETTER</h4>
            <p>email@example.com</p>
            <a href="#" className="btn">Subcribe</a>
          </div>
        </div>
        <div className="Footer-card">
          <a href="#"><img src="images/icon-pay-01.webp" alt="" /></a>
          <a href="#"><img src="images/icon-pay-02.webp" alt="" /></a>
          <a href="#"><img src="images/icon-pay-03.webp" alt="" /></a>
          <a href="#"><img src="images/icon-pay-04.webp" alt="" /></a>
          <a href="#"><img src="images/icon-pay-05.webp" alt="" /></a>
        </div>
        <p className="Footer-copyright">Copyright ©2021 All rights reserved | This template is made with by CheeseHieep</p>
      </div>
    </section>
  );
};

export default Footer;
