import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStepperContext } from '../SetperContext';

const General = () => {
  const { userData } = useStepperContext();
  
  const haldeSubmit = () => {
    axios(
      {
        method: "post",
        url: "http://localhost:5000/admission",
        data: userData,
        headers: { "Content-Type": "multipart/form-data" },
      }
    ).then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    
    console.log(userData);
  }
  
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-indigo-900">
          Congratulations!!!!
        </div>
        <div className="text-lg font-semibold text-indigo-900">
          Application Submitted.
        </div>
        <Link className="mt-10" to="/">
          <button onClick={haldeSubmit()} className="h-10 px-5 text-indigo-900 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:indigo-900 hover:text-indigo-900">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default General;