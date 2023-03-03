import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div className='mb-32'>
            <div id='Contact_banner'>
                <h1 className='text-center'>CONTACT US</h1>
            </div>
            <div className='w-4/5 mx-auto '>

                <div className="contact_card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 card_container">

                    <div className="c_Card w-4/5 mx-auto  card bg-base-100 drop-shadow-2xl">
                        <div className="card-body text-center contact_crd">
                            <div className="icon">
                                <i className="fa-solid fa-phone con_icon"></i>
                            </div>
                            <h2>PHONE</h2>
                            <h3>(+880)-166911463</h3>
                            <h3>(+880)-176911463</h3>

                        </div>
                    </div>

                    <div className="c_Card w-4/5 mx-auto card bg-base-100 drop-shadow-2xl">
                        <div className="card-body text-center">
                            <div className="icon">
                                <i className="fa-solid fa-envelope con_icon"></i>
                            </div>
                            <h2>EMAIL</h2>
                            <h3>return_zero@edu.com</h3>
                            <h3>zero_return@edu.com</h3>
                        </div>
                    </div>

                    <div className="c_Card card w-4/5 mx-auto bg-base-100 drop-shadow-2xl">
                        <div className="card-body text-center">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot con_icon"></i>
                            </div>
                            <h2>ADDRESS</h2>
                            <h3>Administrative Building (Ground Floor)</h3>
                            <h3>Dhaka-1000, Bangladesh</h3>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-4/5 mx-auto '>
                <div className='my-32 text-center con_formSection'>
                    <h1 className='text-center'>We would love to hear from you</h1>
                    <h3>If you have any question about Admission, Features , faculties , Subject , or any other , feel free to contact us.</h3>
                </div>
            </div>
        </div>

    );
};

export default Contact;