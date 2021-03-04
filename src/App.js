import React, { useEffect } from 'react';
import Routers from './routers';
import { useDispatch } from 'react-redux';

import { fetchCategories, fetchProducts, fetchCarts } from './redux/thunk';

const App = () => {
  let dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchCarts());
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
};

export default App;
