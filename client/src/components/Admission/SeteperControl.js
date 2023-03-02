import React from 'react';
import { useStepperContext } from './SetperContext';

import { useStepperContext } from './SetperContext';

export default function SeteperControl({ handleClick, currentStep, steps }) {
  const x = useStepperContext();
  const test = () => {
    console.log(x);

    console.log('test');
    // handleSubmit()
  }

  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
      >
        Back
      </button>

      <button
        onClick={currentStep === steps.length - 1 ? test : () => handleClick("next")}
        className="cursor-pointer rounded-lg bg-indigo-900 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}

      </button>
    </div>
  );
};

