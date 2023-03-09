import React, { useRef } from 'react';
import "./contact.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        swal({
            title: "Good job!",
            text: "Your Message sent successfullly!!",
            icon: "success",
            button: "Aww yiss!",
          });
        emailjs
          .sendForm(
            "service_2oohr2o",
            "template_qoqxble",
            form.current,
            "user_r7CjpvJ4TlNwjhHFca4tE"
            
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };
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
                <div className='mt-32 text-center con_formSection'>
                    <h1 className='text-center mb-4'>We would love to hear from you</h1>
                    <h3>If you have any question about Admission, Features , faculties , Subject , or any other , feel free to contact us.</h3>

                </div>
            </div>
            <div className='w-4/5 mx-auto mt-16'>
                <form 
                onSubmit={sendEmail}
                ref={form}
                >
                    <div className='w-4/5 md:w-3/5 lg:w-3/5 mx-auto card bg-base-100 drop-shadow-2xl p-12'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div className="form-control w-full mb-4 con_frm">
                                <label className="label">Name</label>
                                <input 
                                type="text" 
                                className="input input-bordered w-full" 
                                
                                required />
                            </div>

                            <div className="form-control w-full  mb-4 con_frm">
                                <label className="label">Email</label>
                                <input type="email" className="input input-bordered w-full " required/>
                            </div>
                        </div>

                        <div className="form-control w-full mb-4 con_frm">
                            <label className="label">Message</label>
                            <textarea className="textarea textarea-bordered h-24" required></textarea>
                        </div>
                        
                        <input className='contact_btn mt-4' type="submit" />
                    </div>
                    
                </form>
            </div>
        </div>

    );
};

export default Contact;