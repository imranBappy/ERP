import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
// import Navbar from '../Shared/Navbar/Navbar';
import SeteperControl from './SeteperControl';
import { UseContextProvider } from './SetperContext';
import Stepper from './Stepper';


import Education from './Steps/Education';
import Family from './Steps/Family';

import Personal from './Steps/Personal';

const Admission = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        
        "2.Personal",
        "3.Family",
        "4.Education",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Personal></Personal>;
            case 2:
                return <Family></Family>;
            case 3:
                return <Education></Education>;
            default:
        }
    };
    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };


    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto rounded-2xl bg-white pb-2 drop-shadow-lg md:w-1/2 my-12">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                        <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {currentStep !== steps.length && (
                    <SeteperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
            </div>
        </div>
    );
};

export default Admission;