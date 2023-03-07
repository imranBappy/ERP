import React from 'react';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className=' light__component dark:dark__component h-screen '>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input register={register} errors={errors} type="email" placeholder="Email" />
                <Input register={register} errors={errors} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;