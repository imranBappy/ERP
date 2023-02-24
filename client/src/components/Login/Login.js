import React from 'react';
import "./Login.css";
import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit,formState: { errors }, } = useForm();
    

    const handleLogin = data =>{
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center  items-center login_full'>
            <div className='w-96 p-7 login_card bg-white drop-shadow-xl'>
                <h2 className='text-4xl text-center mb-4'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" 
                         {...register("email",{required: "Email Address is required" })}
                         className="input input-bordered w-full max-w-xs"/>
                         {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
            
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                        {...register("password" ,{
                            required: "Password is required",
                            minLength:{value:6,message:"Password must be 6 characters or longer."}
                        })}
                        className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                 
            
                    </div>

                    <input className='btn log_btn w-full' value="Login"  type="submit" />
                </form>
                <div className="divider">OR</div>
                <button  className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;