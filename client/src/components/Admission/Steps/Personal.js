import React, { useEffect, useState } from 'react';
// import { Form } from 'react-router-dom';
import { useStepperContext } from '../SetperContext';

const Personal = () => {
  const { userData, setUserData } = useStepperContext();

  const [EduData, setEduData] = useState([]);
  console.log(EduData);
  useEffect(() => {
    fetch("http://localhost:5000/department")
      .then((res) => res.json())
      .then((data) => {
        setEduData(data)
      });

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.name === 'url') {
      setUserData({ ...userData, [e.target.name]: e.target.files[0] })
    }
    else {
      setUserData({ ...userData, [name]: value });
    }

  };



  return (
    <div className="flex flex-col">
      <div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
          <div className="mx-2 w-full">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              Student Name
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
                name="email"
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
                name="phone"
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
                placeholder="Address"
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
              {/* <input
                onChange={handleChange}
                name="department"
                placeholder="Department"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
              /> */}

              <select className="select dep w-full " onChange={handleChange} name="department">
                <option disabled selected>Department</option>
                {EduData.map(data =><option 
                key={data._id}
                name={data.name}
                value={data._id}
                >{data.name}</option>)}
                
              </select>
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