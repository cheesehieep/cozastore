import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateCategory } from '../../../../redux/thunk';

const EditCategory = () => {
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();
  let dispatch = useDispatch();
  let { id } = useParams();

  const categories = useSelector(state => state.categories);
  const category = categories.find(category => category.id == id);

  const onHandleSubmit = (data) => {
    dispatch(updateCategory(id, data));
    history.push("/admin/categories");
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Edit Category</h1>
        <Link to="/admin/categories" className="btn btn-primary">List Categories</Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Form Edit Category</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50" autoComplete="off">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                defaultValue={category ? category.name : ""}
                ref={register({
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                  pattern: {
                    value: /^\S/
                  }
                })}
              />
              <small id="nameHelp" className="form-text text-danger">
                {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min Length 3</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max Length 30</span>}
                {errors.name && errors.name.type === "pattern" && <span>Invalid space</span>}
              </small>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
