import React, { useEffect, useState } from 'react';

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
            
        </div>
    );
};

export default AllTeachers;