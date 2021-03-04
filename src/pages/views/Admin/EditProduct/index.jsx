import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { updateProduct } from '../../../../redux/thunk';
import { storage } from '../../../../firebase';

const EditProduct = () => {
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();
  let dispatch = useDispatch(); 
  let { id } = useParams();

  const categories = useSelector(state => state.categories);
  const products = useSelector(state => state.products);
  const product = products.find(product => product.id == id);

  const [valueEditor, setValueEditor] = useState(product.description);
  const [valueImage, setValueImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const handleChangeImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setValueImage(e.target.files[0]);
  };

  const onHandleSubmit = (data) => {
    if (valueImage.name != null) {
      const uploadTask = storage.ref(`images/${valueImage.name}`).put(valueImage);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {console.log(error)},
        () => {storage
          .ref("images")
          .child(valueImage.name)
          .getDownloadURL()
          .then(url => {
            const newData = Object.assign(data, {'image': url}, {'description': valueEditor});
            dispatch(updateProduct(id, newData));
            history.push("/admin/products");
          })
        }
      );
    } else {
      const newData = Object.assign(data, {'image': product.image}, {'description': valueEditor});
      dispatch(updateProduct(id, newData));
      history.push("/admin/products");
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">Edit Product</h1>
        <Link to="/admin/products" className="btn btn-primary">List Products</Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Form Edit Product</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onHandleSubmit)} autoComplete="off">
            <div className="row">
              <div className="form-group col-6">
                <label>Category</label>
                <select className="form-control" name="cate_id" defaultValue={product.cate_id} ref={register({required: true})}>
                  {categories.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-6">
                <label>Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="name"
                  defaultValue={product.name}
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
              <div className="form-group col-6">
                <label>Image</label>
                <div className="custom-file">
                  <label className="custom-file-label overflow-hidden">{valueImage ? valueImage.name : "Choose file..."}</label>
                  <input 
                    type="file"
                    name="image"
                    className="custom-file-input" 
                    onChange={handleChangeImage}
                    ref={register({
                      pattern: {
                        value: /\.(gif|jpg|jpeg|tiff|png|webp|bmp)$/i
                      }
                    })}
                  />
                  <small id="imageHelp" className="form-text text-danger">
                    {errors.image && errors.image.type === "pattern" && <span>Invalid image</span>}
                  </small>
                </div>
              </div>
              <div className="form-group col-6">
                <label>Price</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="price"
                  defaultValue={product.price}
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^\d/
                    }
                  })}
                />
                <small id="priceHelp" className="form-text text-danger">
                  {errors.price && errors.price.type === "required" && <span>This field is required</span>}
                  {errors.price && errors.price.type === "pattern" && <span>Invalid number</span>}
                </small>
              </div>
              <div className="form-group col-6">
                <label>Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={product.description}
                  onChange={(event, editor) => {setValueEditor(editor.getData())}}
                />
              </div>
              <div className="col-6">
                <label>Preview Image</label><br />
                <img src={previewImage ? previewImage : product.image} width="75px" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
