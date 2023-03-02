import React from 'react';
import Input from '../components/Input';

const AddAccount = () => {
    return (
        <div className='light__component dark:dark__component p-5'>
            <h1 className='page__title'>Add Admin</h1>
            <form action="">
                <Input label="First Name" type="text" name="first_name" placeholder="Name" />
            </form>
        </div>
    );
};

export default AddAccount;