import React from 'react';

const SubmitBtn = ({ ...rest }) => {
    return (
        <div className='my-5'>
            <input type='submit' {...rest} className="bg-sky-600 cursor-pointer text-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600" />
        </div>
    );
};

export default SubmitBtn;