import React from 'react';
import "./TeacherFeature.css";

const TeacherFeature = () => {
    return (
        <div className='teacher_feature_container text-center mt-4  sm:w-4/5 h-3/4 mx-auto'>
            <div className='welcome_header'>
                <h1 className='text-4xl heading_h1'>Welcome to University</h1>
                <h3 className='hed_pera'>Study Point is a international leader in teaching students to write effectively,learn from each other and think for themselves.</h3>
            </div>
            <div className="teacher_f_upper w-4/5 mx-auto h-3/4 my-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 h-3/4">

                    <div className="card  shadow-xl">
                        <figure className="px-12 pt-12">
                            <img src="https://i.ibb.co/WGgw06R/tf1.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Professor Dr. Md. Akhtaruzzaman</h2>
                            <p>Vice Chancellor</p>
                        </div>
                    </div>

                    <div className="card shadow-xl col-span-2">
                        <div className="card-body chan_speech">
                            <h2 className="card-title">Message from the Vice Chancellor</h2>
                            <p>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh! Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.Since its establishment, the university has been fulfilling the hopes and aspirations of its students and their parents. It has, of course, not only been a lighthouse of learning, but has also acted as a torch-bearer of the people of the region in issues such as democracy, freedom of expression, and the need for a just and equitable society.</p>
                            <div className="card-actions">
                                <button className="">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="teacher_f_lower w-4/5 mx-auto my-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div className="card  shadow-xl">
                        <figure className="px-12 pt-12">
                            <img src="https://i.ibb.co/NTZMQ87/tf2.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Professor Dr. Md. Akhtaruzzaman</h2>
                            <p>Vice Chancellor</p>
                        </div>
                    </div>

                    <div className="card shadow-xl">
                        <figure className="px-12 pt-12">
                            <img src="https://i.ibb.co/94hPjKd/tf3.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Professor Dr. Md. Akhtaruzzaman</h2>
                            <p>Vice Chancellor</p>
                        </div>
                    </div>

                    <div className="card shadow-xl">
                        <figure className="px-12 pt-12">
                            <img src="https://i.ibb.co/tHr6kdP/tf4.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Professor Dr. Md. Akhtaruzzaman</h2>
                            <p>Vice Chancellor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherFeature;