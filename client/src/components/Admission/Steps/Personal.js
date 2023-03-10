import React from 'react';
import { Form } from 'react-router-dom';
import { useStepperContext } from '../SetperContext';

const Personal = () => {
  const { handleChange, handleSubmit } = useStepperContext();


  return (
    <div className="flex flex-col">
      <div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Username
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="name"
                placeholder="Student Name"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Email
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="studentEmail"
                placeholder="email"
                type="email"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
          <div className="mx-2 w-full ">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Number
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="studentNumber"
                placeholder="number"
                type="number"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>

          </div>

          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Address
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="address"
                placeholder="address"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Department
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="department"
                placeholder="department"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>

          </div>

          {/* <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Profile Photo
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="Photo"
              placeholder="photo"
              type="file"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div> */}
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Photo
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="url"
                placeholder="Photo"
                type="file"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Department
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="department"
                placeholder="department"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>

          </div>


          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Photo
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChange}
                name="url"
                placeholder="Photo"
                type="file"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Personal;