import React from 'react';
import { useStepperContext } from '../SetperContext';


const Education = () => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.name === 'transcript'){
      setUserData({...userData,[e.target.name]:e.target.files[0]})
    }
    else{
      setUserData({ ...userData, [name]: value });
    }
    
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Passing Year
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            name="passingYear"
            placeholder="Last Education Passing Year"
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Transcript
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            name="transcript"
            placeholder="Transcript"
            type="file"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;