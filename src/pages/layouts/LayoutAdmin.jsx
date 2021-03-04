import React from 'react';

import '../../assets/css/sb-admin-2.min.css';
import Sidebar from '../../components/Admin/Sidebar';
import Topbar from '../../components/Admin/Topbar';
import Footer from '../../components/Admin/Footer';

export default ({ children }) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

