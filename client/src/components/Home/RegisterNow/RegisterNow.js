import React from 'react';
import "./RegisterNow.css";

const RegisterNow = () => {
    return (
        <div className="register_container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 res_inner px-4 mx-auto">

                <div className="register_left">
                    <h2>REGISTER NOW</h2>
                    <h3>GET THE COACHING TRAINING BY <br />
                        ADAM JONES <span>FOR FREE</span></h3>
                    <p><span><i className="fa-solid fa-arrows-turn-right mr-4"></i>It’s limited seating! Hurry up</span></p>

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

                <div className="register_right w-4/5">
                    <div className="card  bg-base-100 shadow-xl card_back">
                        <div className="card-body frm_crd_body">
                            <div className="card_title_form mb-4">
                                <p>Create Your free account Now and <br /> Get immidate access to <br /> 100 lines of any cources. </p>
                            </div>
                            
                            <div className="rg_form_container px-4">
                                <form action="">
                                    <input type="text" placeholder='Your Name*'/>
                                    <input type="email" placeholder='Your Email*'/>
                                    <input type="password" placeholder='Password*'/>
                                </form>
                            </div>
                            <div className="form_btn">
                                <input type="submit" value="Register" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterNow;