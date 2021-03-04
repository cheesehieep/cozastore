import React from 'react';

import '../../assets/css/style.scss';
import Header from '../../components/Client/Header';
import Navbar from '../../components/Client/Navbar';
import Sidepanel from '../../components/Client/Sidepanel';
import Footer from '../../components/Client/Footer';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Sidepanel />
      <Navbar />
        {children}
      <Footer />
    </>
  );
};
