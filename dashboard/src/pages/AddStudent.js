import React, { useState } from 'react';

const input_field = require("./AddStudentInputfield")

const AddStudent = () => {

    const [input, setInput] = useState(input_field);

    return (
        <>
        <div className='light__component dark:dark__component p-5'>
           <h1 className='page__title'>Add Student</h1>
           <form>
               <div className="columns-3 gap-8 md:columns-2 sm:columns-1">
        {
        input.map((curr)=>{
            return(
                <>
                <div>
                    <label for="first_name" className="block mb-2 text-sm font- dark:text-white ">{curr.label}</label>
                    <input type={curr.type} name={curr.name} id="first_name" className="bg-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder={curr.placeHolder} required />
                </div>

                </>
            )

            })
        }
        </div>
        {/* <div>
            <button type='button' className='w-fit bg-sky-600 p-5'>Submit</button>
        </div> */}
        <div>
        <button type="submit" className="text-white-900  mt-6 bg-sky-600 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-skbg-sky-600">Submit</button>

        </div>

        </form>

        </div>
        </>
    );
};

export default AddStudent;
