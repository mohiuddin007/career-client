import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    
    const onSubmit = (data, event) => {
        const userCredential = data;
        console.log(userCredential)
        // fetch('https://seradeal.herokuapp.com/offerAdd',{
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json'
        //      },
        //      body: JSON.stringify(newOffer)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data){
        //         alert('successfully added');
        //         event.target.reset();
        //     }
        // })
    }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 rounded border border-secondary p-4 mt-5">
              <h3 className="text-center font-weight-bold">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
         
                <div className="form-group mt-4">
                  <label for="exampleInputPassword1">
                    Write your email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded"
                    placeholder="Write your email"
                    id="exampleInputPassword1"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                  <div className="form-group mt-3">
                    <label for="exampleInputPassword1">
                      Write your password
                    </label>
                    <input
                      type="password"
                      className="form-control rounded"
                      placeholder="write your password"
                      id="exampleInputPassword1"
                      name="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
           
              <div className="mt-4 ">
                <button
                  type="submit"
                  className="btn btn-block btn-success rounded px-4"
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
