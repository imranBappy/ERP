import React from 'react';
import { useStepperContext } from '../SetperContext';

const Family = () => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
  };

  return (
    <div className="flex flex-col">

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Father Name
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="fatherName"
              placeholder="Father Name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Mother Name
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="motherName"
              placeholder="Mother Name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>




      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Guardian Phone Number
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="guardianPhone"
              placeholder="Guardian Number"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>

        </div>

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Guardian Email
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="guardianEmail"
              placeholder="Guardian Email"
              type="email"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Relationship
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="Relasion"
              placeholder="Relationship With Guardian"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>

        </div>

        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            NID Number
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              name="guardianNID"
              placeholder="Guradian NID Number"
              type="number"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default Family;