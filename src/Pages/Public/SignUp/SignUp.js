import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import './signup.css';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [role, setRole] = useState("");
    const [isCompany, setIsCompany] = useState(false);
    
    const onSubmit = (data, event) => {
        const newUser = data;
        console.log(newUser);
        if(newUser.companyName){
            setIsCompany(true);
        }
        fetch('http://localhost:5000/api/register',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('successfully added');
                event.target.reset();
            }
        })
    }

    console.log(role)
    return (
        <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 rounded border border-secondary p-4 mt-5">
          {/* <div className="row justify-content-between">
              <div className="col-5 bg-info rounded">
                  <p className="text-light text-center">Join as a job seeker</p>
              </div>
              <div className="col-5 bg-info rounded">
              <p className="text-light text-center">Join as an Employer</p>
                  
              </div>
          </div> */}
              <h3 className="text-center font-weight-bold">SignUp</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mt-4">
                    <label for="exampleInputPassword1">
                        Write your name
                    </label>
                    <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Write your name"
                        id="exampleInputPassword1"
                        name="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="text-danger">This field is required</span>
                    )}
                    </div>
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
                  <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Popular</label>
                            <select 
                                name="role" 
                                {...register("role", { required: true })}
                                className="form-control rounded" 
                                id="exampleInputEmail1" 
                                onChange={(e)=> setRole(e.target.value)}
                                >
                                <option >Job seeker or Employer</option>
                                <option value="jobSeeker">Job seeker</option>
                                <option value="employer">Employer</option>
                                
                            </select>
                            {errors.role && (
                            <span className="text-danger">
                                This field is required
                            </span>
                            )}
                        </div>
                 <div className={role == "employer" ? "form-group mt-3 show" : "form-group mt-3 hide"}>
                    <label for="exampleInputPassword1">
                      Write your company name
                    </label>
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="write your password"
                      id="exampleInputPassword1"
                      name="companyName"
                      {...register("companyName", { required: true })}
                    />
                    {errors.companyName && role == "employer" && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
           
              <div className="mt-4 ">
                <button
                  type="submit"
                  className="btn btn-block btn-info rounded px-4"
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

export default SignUp;