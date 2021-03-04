import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import banner_01 from '../../../../assets/images/banner-01.jpg';
import banner_02 from '../../../../assets/images/banner-02.jpg';
import banner_03 from '../../../../assets/images/banner-03.jpg';

import { searchProduct, filterProductsByCate, sortProductsByPrice } from '../../../../redux/thunk';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let dispatch = useDispatch();

  const categories = useSelector(state => state.categories);
  const products = useSelector(state => state.filteredProducts.length !== 0 ? state.filteredProducts : state.products);
  const cateId = useSelector(state => state.cateId);

  return (
    <>
      <section className="Background">
        <section className="Carousel">
          <div className="Carousel-container">
            <div className="Carousel-text">
              <p>Men Collection 2021</p>
              <h2>Jackets &amp; coats</h2>
              <a href="#" className="btn">Shop now</a>
            </div>
          </div>
        </section>
      </section>
      <section className="Banner">
        <div className="Banner-container">
          <div className="Banner-item">
            <img src={banner_01} alt="" />
            <a href="shop.html">
              <div className="Banner-item-text">
                <h3>Women</h3>
                <p>Spring 2021</p>
              </div>
              <div className="Banner-item-link">
                <p>Shop now</p>
              </div>
            </a>
          </div>
          <div className="Banner-item">
            <img src={banner_02} alt="" />
            <a href="shop.html">
              <div className="Banner-item-text">
                <h3>Men</h3>
                <p>Spring 2021</p>
              </div>
              <div className="Banner-item-link">
                <p>Shop now</p>
              </div>
            </a>
          </div>
          <div className="Banner-item">
            <img src={banner_03} alt="" />
            <a href="shop.html">
              <div className="Banner-item-text">
                <h3>Accessories</h3>
                <p>New Trend</p>
              </div>
              <div className="Banner-item-link">
                <p>Shop now</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="Product">
        <div className="Product-container">
          <div className="Product-header">
            <h2>New arrival</h2>
          </div>
          <div className="Product-body">
            <div className="Product-action">
              <ul className="Product-action-tab">
                <li><a className={"tab-link" + (cateId === undefined || cateId === "all" ? " active" : "")} onClick={() => dispatch(filterProductsByCate("all"))}>All products</a></li>
                {categories.map(({ id, name }) => (
                  <li key={id}><a className={"tab-link" + (cateId === id ? " active" : "")} onClick={() => dispatch(filterProductsByCate(id))}>{name}</a></li>
                ))}
              </ul>
              <div className="Product-action-fs">
                <select className="Product-fs-filter" onChange={(e) => dispatch(sortProductsByPrice(e.target.value))}>
                  <option value>Filter</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
                <div className="Product-fs-search">
                  <i className="fas fa-search" />
                  <input type="text" placeholder="Search..." onChange={(e) => dispatch(searchProduct(e.target.value))} />
                </div>
              </div>
            </div>
            <div className="Product-list">
              {products.map(({ id, name, image, price }) => (
                <div className="Product-list-item" key={id}>
                  <div className="Product-item-image">
                    <img src={image} alt="images" />
                    <Link to={`/product/${id}`} className="btn">Quick view</Link>
                  </div>
                  <div className="Product-item-content">
                    <div className="Product-item-content-text">
                      <Link to={`/product/${id}`}>{name}</Link>
                      <span>${price}</span>
                    </div>
                    <div className="Product-item-content-heart">
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="Product-button">
              <Link to="/shop" className="btn">Shop now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
