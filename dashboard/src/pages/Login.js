import React from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import SubmitBtn from '../components/SubmitBtn';
import { connect } from 'react-redux'
import { authLoginAction } from '../app/actions/authAction'
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const { isLoading } = props.auth
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.authLoginAction(data)
    }
    return props.auth.isAuthintication ? < Navigate to="/" /> : (
        <div className='mt-10 max-w-5xl m-auto light__component dark:dark__component h-screen '>
            <h1 className='text-xl my-5'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="email"
                    label='Enter you email'
                    file={null}
                    register={register}
                    errors={errors}
                    type="email"
                    placeholder="Email" />
                <Input
                    name="password"
                    label='Password you email'
                    register={register}
                    errors={errors}
                    type="password"
                    placeholder="Password" />
                <SubmitBtn disabled={isLoading ? true : false} value={isLoading ? "Looding" : "Login"} />

            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { authLoginAction })(Login);