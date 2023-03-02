import React from 'react';
import Input from '../components/Input';

const Accounts = () => {
    
    return (
        <div className='light__component dark:dark__component p-5 max-w-5xl m-auto'>
            <h1 className='page__title'>Add Admin</h1>
            <form action="" className='max-w-3xl m-auto'>
                <Input label="First Name" type="img" name="first_name" placeholder="Name" />
                <Input label="Full Name" type="text" name="name" placeholder="Name" />
                <Input label="Email" type="email" name="email" placeholder="Email" />
                <Input label="First Name" type="text" name="first_name" placeholder="Name" />
                <Input label="Password" type="password" name="password" placeholder="Enter Password" />
                <Input  type="submit" name="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Accounts;