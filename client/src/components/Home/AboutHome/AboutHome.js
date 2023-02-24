import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutHome.css";

const AboutHome = () => {
    return (
        <div className='text-center my-32 sm:w-4/5 h-3/4 mx-auto'>
            <div className='welcome_header'>
                <h1 className='text-4xl heading_h1'>About Return Zero University</h1>
            </div>
            <div className='w-4/5 mx-auto h-3/4 my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mx-auto'>
                    
                    <div className="home_about_right text-justify">
                        <p>Welcome to University of Return Zero.On the first day of July 1921 the University of Return Zero opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.</p>
                        The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students.
                        Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.
                        <Link to="/about"><button className='about_btn w-full mt-4'>READ MORE... <span><i className="fa-solid fa-circle-check"></i></span></button></Link>
                    </div>
                    <div className="home_about_left">
                        <img src="https://i.ibb.co/4pznN37/about-img-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;