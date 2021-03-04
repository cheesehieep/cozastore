import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../../redux/thunk';

const Sidebar = () => {
  let dispatch = useDispatch(); 

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <Link to="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">Cozastore</div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/categories" className="nav-link">
          <i className="fas fa-certificate"></i>
          <span>Category</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          <i className="fas fa-gem"></i>
          <span>Product</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" style={{cursor: "pointer"}} onClick={() => dispatch(logout())}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
