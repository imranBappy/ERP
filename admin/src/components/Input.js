import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Input = ({ options, file, label, type, errors, register, ...rest }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(!show) }
    switch (type) {
        case 'img':
            return <div className="flex justify-center mt-8 ">
                <div className="max-w-2xl rounded-lg shadow-xl bg-white-900  dark:bg-black-800">
                    <div className="m-4 ">
                        <label className="inline-block mb-2 text-gray-500 dark:text-white-800">Profile Picture</label>
                        <div className="flex items-center justify-center w-60 h-60">
                            <label className="flex flex-col w-full h-full rounded-full p-1 border-4  border-blue-200 border-dashed dark:hover:bg-black-700 hover:border-gray-300">
                                {
                                    file ? <img src={file} alt="" className=' w-60 h-60 rounded-full' /> : <div className="flex flex-col items-center justify-center pt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" className=" w-20 h-20 mt-7 text-gray-400 group-hover:text-gray-600"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Attach a file</p>
                                    </div>
                                }
                                <input
                                    aria-invalid={errors[rest.name] ? "true" : "false"}
                                    {...register(rest.name)} type="file" className="opacity-0" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        case 'password':
            return <div className='mt-2'>
                <div className='flex items-center'>
                    <div className='grow'>
                        <label htmlFor="first_name" className="block mb-2 text-sm  dark:text-white ">{label}</label>
                        <input
                            {...rest}
                            {...register(rest.name, { required: true })}
                            type={show ? 'text' : 'password'}
                            className="bg-white-800 h-11 border border-black text-sm rounded-lg rounded-r-none border-r-0 focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600"
                            aria-invalid={errors[rest.name] ? "true" : "false"}
                        />
                    </div>
                    <div className='rounded-lg w-9 rounded-l-none border border-l-0 h-11 bg-white-800 dark:bg-black-700 ' style={{ marginTop: "27px" }}>
                        {
                            !show ? <AiFillEye onClick={handleShow} className='mt-3 ml-2 ' style={{ cursor: 'pointer' }} /> :
                                <AiFillEyeInvisible onClick={handleShow} className='mt-3 ml-2 ' style={{ cursor: 'pointer' }} />
                        }
                    </div>
                </div>
                {errors[rest.name] && <span className='text-error'>{rest.name} is required</span>}
            </div>
        case 'select':
            return <div className='mt-2'>
                <label htmlFor="first_name" className="block mb-2 text-sm font- dark:text-white ">{label}</label>

                <select   {...register(rest.name, { required: true })}
                    aria-invalid={errors[rest.name] ? "true" : "false"}
                    {...rest} type={type}
                    className="bg-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600"
                >
                    {
                        options.map((option, index) => <option value={option} key={index} >{option}</option>)
                    }


                </select>
                {errors[rest.name] && <span className='text-error'>{rest.name} is required</span>}
            </div>;
        default:
            return <div className='mt-2'>
                <label htmlFor="first_name" className="block mb-2 text-sm font- dark:text-white ">{label}</label>
                <input
                    {...register(rest.name, { required: true })}
                    aria-invalid={errors[rest.name] ? "true" : "false"}
                    {...rest} type={type} className="bg-white-800 border border-black- text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-black-800 dark:border-black-600 dark: dark:text-white-900 dark:focus:ring-sky-600 dark:focus:border-sky-600" />
                {errors[rest.name] && <span className='text-error'>{rest.name} is required</span>}
            </div>;
    }

};

export default Input;