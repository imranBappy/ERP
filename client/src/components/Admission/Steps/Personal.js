import React from 'react';
import { useStepperContext } from '../SetperContext';

const Personal = () => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div>
        
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>

      <div className="mx-2 w-full flex-1">
              <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                Student Name
              </div>
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <input
                  onChange={handleChange}
                  value={userData["studentName"] || ""}
                  name="studentName"
                  placeholder="Student Email"
                  
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                />
              </div>
            </div>

        
            <div className="mx-2 w-full flex-1">
              <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                Email
              </div>
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <input
                  onChange={handleChange}
                  value={userData["studentEmail"] || ""}
                  name="studentEmail"
                  placeholder="Student Email"
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
              value={userData["studentNumber"] || ""}
              name="studentNumber"
              placeholder="Phone Number"
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
              value={userData["address"] || ""}
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
              value={userData["department"] || ""}
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
              value={userData["photo"] || ""}
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
                  value={userData["photo"] || ""}
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