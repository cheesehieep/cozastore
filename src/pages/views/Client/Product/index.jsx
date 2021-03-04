import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Slider from "react-slick";

import './style.scss';
import { addCart, updateCart } from '../../../../redux/thunk';

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  let history = useHistory();
  let dispatch = useDispatch(); 

  const [quantity, setQuantity] = useState(1);

  const categories = useSelector(state => state.categories);
  const products = useSelector(state => state.products);
  const carts = useSelector(state => state.carts);
  const product = products.find(product => product.id == id);
  const category = categories.find(category => category.id == product.cate_id);
  const productsRelated = products.filter(product => product.cate_id == category.id && product.id != id);

  const handleAddToCart = () => {
    const data = {
      id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity
    };
    const findCart = carts.find(cart => cart.id == id);
    findCart ? dispatch(updateCart(data)) : dispatch(addCart(data));
    history.push("/cart");
  };

  const settingsGallery = {
    slidesToShow: 1,
  };

  const settingsRelated = {
    slidesToShow: 4,
    infinite: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    }]
  };

  return (
    <>
      <section className="Breadcrumb">
        <div className="Breadcrumb-container">
          <Link to="/">Home</Link>
          <i className="fas fa-angle-right" />
          <a href="#">{category.name}</a>
          <i className="fas fa-angle-right" />
          <span>{product.name}</span>
        </div>
      </section>
      <section className="ProductDetail">
        <div className="ProductDetail-container">
          <div className="ProductDetail-info">
            <div className="ProductDetail-info-slick">
              <div className="ProductDetail-info-slick-dot">
                <img src={product.image} alt="images" />
              </div>
              <Slider {...settingsGallery} className="ProductDetail-info-slick-gallery">
                <img src={product.image} alt="images" />
              </Slider>
            </div>
            <div className="ProductDetail-info-content">
              <h2>{product.name}</h2>
              <span>${product.price}</span>
              {ReactHtmlParser(product.description)}
              <div className="ProductDetail-info-content-select">
                <p>Size</p>
                <select>
                  <option value>Choose an option</option>
                  <option value>Size S</option>
                  <option value>Size M</option>
                  <option value>Size L</option>
                  <option value>Size XL</option>
                </select>
              </div>
              <div className="ProductDetail-info-content-select">
                <p>Color</p>
                <select>
                  <option value>Choose an option</option>
                  <option value>Red</option>
                  <option value>Blue</option>
                  <option value>White</option>
                  <option value>Gray</option>
                </select>
              </div>
              <div className="ProductDetail-info-content-number">
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <input type="text" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <a href="#" className="btn" onClick={handleAddToCart}>Add to cart</a>
            </div>
          </div>
          <div className="ProductDetail-description" id="tabs">
            <ul className="ProductDetail-description-tab">
              <li><a href="#description" className="tab-link active">Description</a></li>
              <li><a href="#additional" className="tab-link">Additional information</a></li>
            </ul>
            <div className="ProductDetail-description-content" id="description">
              <p>Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.</p>
            </div>
            <div className="ProductDetail-description-content" id="additional">
              <ul>
                <li><p>Weight</p><span>0.79kg</span></li>
                <li><p>Dimensions</p><span>110 x 33 x 100 cm</span></li>
                <li><p>Materials</p><span>60% cotton</span></li>
                <li><p>Color</p><span>Black, Blue, Grey, Green, Red, White</span></li>
                <li><p>Size</p><span>XL, L, M, S</span></li>
              </ul>
            </div>
          </div>
          <div className="ProductDetail-related">
            <h2>Related Products</h2>
            <Slider {...settingsRelated} className="ProductDetail-related-list">
              {productsRelated.map(({ id, name, image, price }) => (
                <div className="ProductDetail-related-list-item" key={id}>
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
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
