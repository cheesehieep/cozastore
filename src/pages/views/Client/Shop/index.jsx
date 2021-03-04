import React from 'react';

import './style.scss';

const Shop = () => {
  return (
    <section className="Product">
      <div className="Product-container">
        <div className="Product-header">
          <h2>Product overview</h2>
        </div>
        <div className="Product-body" id="tabs">
          <div className="Product-action">
            <ul className="Product-action-tab">
              <li><a href="#all" className="tab-link active">All products</a></li>
              <li><a href="#women" className="tab-link">Women</a></li>
              <li><a href="#men" className="tab-link">Men</a></li>
              <li><a href="#bag" className="tab-link">Bag</a></li>
              <li><a href="#shoes" className="tab-link">Shoes</a></li>
              <li><a href="#watches" className="tab-link">Watches</a></li>
            </ul>
            <div className="Product-action-fs">
              <select className="Product-fs-filter">
                <option value>Filter</option>
                <option value>Default</option>
                <option value>Popularity</option>
                <option value>Average rating</option>
                <option value>Newness</option>
                <option value>Price: Low to High</option>
                <option value>Price: High to Low</option>
              </select>
              <div className="Product-fs-search">
                <i className="fas fa-search" />
                <input type="text" placeholder="Search..." />
              </div>
            </div>
          </div>
          <div className="Product-list" id="all">
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-01.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Esprit Ruffle Shirt</a>
                  <span>$16.64</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-02.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Herschel supply</a>
                  <span>$35.31</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-03.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Only Check Trouser</a>
                  <span>$25.50</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-04.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Classic Trench Coat</a>
                  <span>$75.00</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-05.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Front Pocket Jumper</a>
                  <span>$34.75</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-06.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Vintage Inspired Classic</a>
                  <span>$93.20</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-07.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Shirt in Stretch Cotton</a>
                  <span>$52.66</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-08.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Pieces Metallic Printed</a>
                  <span>$18.96</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-09.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Converse All Star Hi Plimsolls</a>
                  <span>$75.00</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-10.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Femme T-Shirt In Stripe</a>
                  <span>$25.85</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-11.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Herschel supply</a>
                  <span>$63.16</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
            <div className="Product-list-item">
              <div className="Product-item-image">
                <img src="images/product-12.jpg" alt="" />
                <a href="product.html" className="btn">Quick view</a>
              </div>
              <div className="Product-item-content">
                <div className="Product-item-content-text">
                  <a href="product.html">Herschel supply</a>
                  <span>$63.15</span>
                </div>
                <div className="Product-item-content-heart">
                  <i className="far fa-heart" />
                </div>
              </div>
            </div>
          </div>
          <div className="Product-button">
            <a href="shop.html" className="btn">Shop now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
