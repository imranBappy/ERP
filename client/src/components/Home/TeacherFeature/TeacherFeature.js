import React from 'react';
import "./TeacherFeature.css";

const TeacherFeature = () => {
    return (
        <div>
            <div className="teacher_f_upper w-4/5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="card w-96 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/WGgw06R/tf1.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>

                    <div className="card  shadow-xl col-span-2">
                        <div className="card-body chan_speech">
                            <h2 className="card-title">Message from the Vice Chancellor</h2>
                            <p>Welcome to the University of Dhaka’s website, featuring the oldest, largest and the premier multidisciplinary university of Bangladesh! Founded in 1921, The University of Dhaka has always had the mission of uplifting the educational standards of the people of the region. It was initially meant to provide tertiary education to people who didn’t have access to higher studies till then. Subsequently, it has contributed significantly to the socio-cultural and political development of what was once East Bengal and then East Pakistan, and is now Bangladesh.</p>
                            <div className="card-actions">
                                <button className="">Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="teacher_f_lower">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                </div>
            </div>
        </div>
    );
};

export default TeacherFeature;