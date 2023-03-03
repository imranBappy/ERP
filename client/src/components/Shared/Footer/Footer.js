import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return (
        <div className='bg-dark footer_full mx-auto'>
            <div className='footer_top_container'>
                <div className="footer_top p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[1400px] mx-auto">
                    <div >
                        <h1>Subscribe to our Newsletter</h1>
                        <p>Sign up to receive email updates about courses</p>
                    </div>
                    <div className='lg:ml-32'>
                        <input type="email" placeholder='Enter your email' />
                        <button type="submit">SubsCribe</button>
                    </div>
                </div>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-[1400px] mx-auto">
                <div className='mr-4'>
                    <Link to="/" className="btn btn-ghost normal-case nav_icon_re sm: text-sm lg:text-lg text-left mb-3">Return <span className='zero'> Zero; </span> University</Link>
                    <p className='mb-3'><i className="fa-solid fa-location-dot ft_angle_icon"></i>Administrative Building (Ground Floor)Dhaka-1000, Bangladesh</p>
                    <p className='mb-3'><i className="fa-solid fa-phone ft_angle_icon"></i> +88-09666911463</p>
                    <p className='mb-3'><i className="fa-solid fa-fax ft_angle_icon"></i> Fax: 880-2-9667222</p>
                    <p className='mb-3'><i className="fa-solid fa-envelope ft_angle_icon"></i> vcoffice@du.ac.bd, registrar@du.ac.bd</p>
                </div>
                <div>
                    <h2 className='mt-10'> </h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Registered Graduate</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Result Archive</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Annual Performance Agreement (APA)</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Teachers Housing</p>

                </div>
                <div>
                    <h2 className='mt-10'> </h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Forms</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Institutional Repository</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Barta</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> DU Library</p>

                </div>
                <div>
                    <h2 className='mb-3 footer_head2'> Useful Links</h2>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Approved NOCs</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Jobs</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> Annual Report</p>
                    <p className='mb-3'><i className="fa-solid fa-angle-right ft_angle_icon"></i> E-Tender</p>
                </div>


            </div>
            <div className="footer_bottom text-center mx-auto">
                <p>© 2023 Study Point. All Rights Reserved. Design, Development and Maintenance by Return Zero</p>
            </div>
        </div>
    );
};

export default Footer;