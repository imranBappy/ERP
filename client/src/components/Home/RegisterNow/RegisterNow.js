import React from 'react';
import "./RegisterNow.css";

const RegisterNow = () => {
    return (
        <div className="register_container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 res_inner">

                <div className="register_left">
                    <h2>REGISTER NOW</h2>
                    <h3>GET THE COACHING TRAINING BY <br />
                        ADAM JONES <span>FOR FREE</span></h3>
                    <p><span><i class="fa-solid fa-arrows-turn-right mr-4"></i>It’s limited seating! Hurry up</span></p>

                    <div className="time_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 ">
                        <div className="dhms">
                            <p className='text-3xl mb-2'>00</p>
                            <p>DAYS</p>
                        </div>
                        <div className="dhms">
                            <p className='text-3xl mb-2'>00</p>
                            <p>HOURS</p>
                        </div>
                        <div className="dhms">
                            <p className='text-3xl mb-2'>00</p>
                            <p>MINUTES</p>
                        </div>
                        <div className="dhms">
                            <p className='text-3xl mb-2'>00</p>
                            <p>SECONDS</p>
                        </div>
                    </div>
                </div>

                <div className="register_right">
                    <p>Create your free account now and get immediate access to 100s of courses</p>
                    <button className="btn btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterNow;