import React from 'react';
import "./Teachers.css";

const AllTeacher = ({card}) => {
    const{name,email,url,profile} = card;
    
    return (
        <div className="card card-side bg-base-100 drop-shadow-xl single_card grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto">
            <figure  className="tea_img_container"><div>
                <img src={`http://localhost:5000/uploads/${url}`} alt="Movie" />
                </div></figure>
            <div className="card-body crd_bdy_teacher">
                <h2 className="card-title"><b>Name: {name}</b> </h2>
                <h4><b>Designation</b> : {profile.designation}</h4>
                <h4><b>Phone</b> : {profile.phone}</h4>
                <p><b>Email</b> : {email}</p>
                <div>
                    <button className="btn btn-primary">VIEW PROFILE</button>
                </div>
            </div>
        </div>
    );
};

export default AllTeacher;