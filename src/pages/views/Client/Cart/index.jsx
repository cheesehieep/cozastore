import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeCart, updateCart } from '../../../../redux/thunk';

import './style.scss';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let dispatch = useDispatch(); 
  const carts = useSelector(state => state.carts);

  let total = 0;
  for (let i = 0; i < carts.length; i++) {
    total += (carts[i].price * carts[i].quantity);
  };

  return (
    <>
      <section className="Breadcrumb">
        <div className="Breadcrumb-container">
            <Link to="/">Home</Link>
            <i className="fas fa-angle-right"></i>
            <span>Shopping Cart</span>
        </div>
      </section>
      <section className="Cart">
        <div className="Cart-container">
          <div className="Cart-left">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th />
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody>
                {carts.map(({ id, name, image, price, quantity }) => (
                  <tr key={id}>
                    <td><img src={image} alt="images" width="75" /></td>
                    <td>{name}</td>
                    <td>${price}</td>
                    <td>
                      <button onClick={() => dispatch(updateCart({ id, quantity: - 1 }))}>-</button>
                      <input type="text" value={quantity} readOnly />
                      <button onClick={() => dispatch(updateCart({ id, quantity: 1 }))}>+</button>
                    </td>
                    <td>${price * quantity}</td>
                    <td><a href="#" onClick={() => dispatch(removeCart(id))}><i className="fas fa-trash-alt text-danger"></i></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="Cart-coupon">
              <input type="text" placeholder="Coupon Code" />
              <a href="#" className="btn">Apply coupon</a>
              <a href="#" className="btn">Update cart</a>
            </div>
          </div>
          <div className="Cart-right">
            <h4>Cart totals</h4>
            <div className="Cart-flex">
              <p>Subtotal:</p>
              <span>${total}</span>
            </div>
            <div className="Cart-flex">
              <p>Shipping:</p>
              <div>
                <span>There are no shipping methods available. Please double check your address, or contact us if you need any help.</span>
                <span>CALCULATE SHIPPING</span>
                <select>
                  <option value>Select a country...</option>
                  <option value>USA</option>
                  <option value>UK</option>
                </select>
                <input type="text" placeholder="State / Country" />
                <input type="text" placeholder="Postcode / Zip" />
                <a href="#" className="btn">Update totals</a>
              </div>
            </div>
            <div className="Cart-flex">
              <p style={{fontSize: '20px'}}>Total:</p>
              <span>${total}</span>
            </div>
            <a href="#" className="btn bg-dark">Proceed to checkout</a>
          </div>
        </div>
      </section>  
    </>
  );
};

export default Cart;
