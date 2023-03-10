import React, { useEffect, useState } from 'react';
import AllTeacher from './AllTeacher';

const AllTeachers = () => {
    const [teacher, setTeacher] = useState([]);
    console.log(teacher);
    useEffect(() => {
        fetch("http://localhost:5000/teacher")
            .then((res) => res.json())
            .then((data) => {
                setTeacher(data)
            });

    }, []);

    return (
        <div>
            <div className="teacher_section mb-32">
                <div className="teacher_container max-w-[1500px] mx-auto">
                    <div className="teacher_header">
                        <h2 className="tech_hed">Our Teachers</h2>
                        <h3 className="hed_pera">
                            Find online courses and a wide range of related learning content.
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 cards">
                        {teacher.map((card) => (
                            <AllTeacher key={card._id} card={card}></AllTeacher>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllTeachers;