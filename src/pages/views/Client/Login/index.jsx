import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './style.scss';
import { login } from '../../../../redux/thunk';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  let history = useHistory();
  let dispatch = useDispatch(); 

  const onHandleSubmit = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "123") {
      dispatch(login(data));
      history.push("/admin");
    } else {
      alert("Account or password not correct");
    }
  };

  return (
    <section className="Login">
      <div className="Login-container">
        <h2 className="text-center mb-5">Login</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)} className="w-50 m-auto">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="text" 
              className="form-control" 
              name="email" 
              ref={register({
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/
                }
              })} 
            />
            <small id="emailHelp" className="form-text text-danger">
              {errors.email && errors.email.type === "required" && <span>This field is required</span>}
              {errors.email && errors.email.type === "pattern" && <span>Invalid email</span>}
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              ref={register({
                required: true,
                minLength: 3
              })} 
            />
            <small id="passwordHelp" className="form-text text-danger">
              {errors.password && errors.password.type === "required" && <span>This field is required</span>}
              {errors.password && errors.password.type === "minLength" && <span>Min Length 3</span>}
            </small>
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
