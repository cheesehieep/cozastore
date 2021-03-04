import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import Dashboard from '../pages/views/Admin/Dashboard';
import Categories from '../pages/views/Admin/Categories';
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory';
import Products from '../pages/views/Admin/Products';
import AddProduct from '../pages/views/Admin/AddProduct';
import EditProduct from '../pages/views/Admin/EditProduct';

import LayoutClient from '../pages/layouts/LayoutClient';
import Home from '../pages/views/Client/Home';
import Shop from '../pages/views/Client/Shop';
import Product from '../pages/views/Client/Product';
import Cart from '../pages/views/Client/Cart';
import Login from '../pages/views/Client/Login';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/admin/:path?/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard />
              </Route>
              <Route path="/admin/categories">
                <Categories />
              </Route>
              <Route path="/admin/add-category">
                <AddCategory />
              </Route>
              <Route path="/admin/edit-category/:id">
                <EditCategory />
              </Route>
              <Route path="/admin/products">
                <Products />
              </Route>
              <Route path="/admin/add-product">
                <AddProduct />
              </Route>
              <Route path="/admin/edit-product/:id">
                <EditProduct />
              </Route>
            </Switch>
          </LayoutAdmin>
        </PrivateRoute>
        <Route>
          <LayoutClient>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/shop" exact>
                <Shop />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </LayoutClient>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
