import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeCategory } from '../../../../redux/thunk';

const Categories = () => {
  let dispatch = useDispatch(); 

  const categories = useSelector(state => state.categories);
  const products = useSelector(state => state.products);

  const handleRemove = (id) => {
    dispatch(removeCategory(id));
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">List Categories</h1>
        <Link to="/admin/add-category" className="btn btn-primary">Add Category</Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Categories</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Amount Product</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ id, name }, index) => {
                  const amount = products.filter(product => product.cate_id == id);
                  return <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{amount.length}</td>
                    <td className="d-flex align-items-center">
                      <Link to={`/admin/edit-category/${id}`}><i className="fas fa-edit text-primary"></i></Link>
                      <a href="#" className="ml-4" onClick={() => handleRemove(id)}><i className="fas fa-trash-alt text-danger"></i></a>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
