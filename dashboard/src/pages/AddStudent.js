import React, { useState } from 'react';
import axios from 'axios';
const input_field = require("./AddStudentInputfield")

const AddStudent = () => {
    const [input,] = useState(input_field);
    const [std, setStd] = useState({
    })
    const handleChange = (e) => {
        if (e.target.name === 'url' || e.target.name === 'transcript') {
            setStd({ ...std, [e.target.name]: e.target.files[0] })
        } else {
            setStd({ ...std, [e.target.name]: e.target.value })
        }
    }
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('url', std['url'])
        formData.append('transcript', std['transcript'])

        Object.keys(std).forEach(key => {
            formData.append(key, std[key])
        });

        axios(
            {
                method: "post",
                url: "http://localhost:5000/admission",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            }
        ).then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        e.preventDefault()
        console.log(std);
    }
    return (
        <>
            <div className='light__component dark:dark__component p-5'>
                <h1 className='page__title'>Add Student</h1>
                <form onSubmit={handleSubmit}>
                    <div className="columns-3 gap-8 md:columns-2 sm:columns-1">
                        {
                            input.map((curr, index) => {
                                return (
                                    <>
                                        <div key={index}>
                                            <label htmlFor="first_name" className="block mb-2 text-sm font- dark:text-white ">{curr.label}</label>
                                            <input onChange={handleChange} type={curr.type} name={curr.name} id="first_name" className="bg-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600" placeholder={curr.placeHolder} required />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button type="submit" className="text-white-900  mt-6 bg-sky-600 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-skbg-sky-600">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddStudent;
