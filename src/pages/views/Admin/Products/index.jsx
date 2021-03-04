import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import { removeProduct } from '../../../../redux/thunk';

const Products = () => {
  let dispatch = useDispatch(); 

  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">List Products</h1>
        <Link to="/admin/add-product" className="btn btn-primary">Add Product</Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Products</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ id, cate_id, name, image, price, description }, index) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{categories.map(category => category.id == cate_id ? category.name : "")}</td>
                    <td>{name}</td>
                    <td><img src={image} alt="images" width="50" /></td>
                    <td>${price}</td>
                    <td>{ReactHtmlParser(description)}</td>
                    <td><Link to={`/admin/edit-product/${id}`}><i className="fas fa-edit text-primary"></i></Link></td>
                    <td><a href="#" onClick={() => handleRemove(id)}><i className="fas fa-trash-alt text-danger"></i></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
