import React from 'react';
import "./Login.css";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
=======
import axios from 'axios';
import { redirect } from "react-router-dom";

>>>>>>> imran
const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const handleLogin = data => {
        axios.post('/auth', data)
            .then(res => {
                console.log(res.data,
                    res.data.token)
                window.open(`http://localhost:3000?token=${res.data.token}`)
            }).then(err => {
                console.log(err);
                alert(err.message)
            })
    }
    return (
        <div>

            <div className='h-[800px] flex justify-center  items-center login_full px-4'>
                <div className='w-96 p-7 login_card bg-white drop-shadow-xl'>
                    <h2 className='text-4xl text-center login_text mb-4'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs mb-4">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer." }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

                            <label className="label"><span className="label-text mt-2">Forget Password?</span></label>


                        </div>

                        <input className='btn log_btn w-full my-8' value="Login" type="submit" />
                    </form>
                    {/* <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;