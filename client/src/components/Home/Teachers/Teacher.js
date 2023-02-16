import React from 'react';

const Teacher = ({card}) => {
    const {img,name,titlle,des} = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl single_card grid grid-cols-1 lg:grid-cols-2">
            <figure  className="t_img_container"><div>
                <img src={img} alt="Movie" />
                </div></figure>
            <div className="card-body crd_bdy_teacher">
                <h2 className="card-title">{name}</h2>
                <h4>{titlle}</h4>
                <p>{des}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">VIEW PROFILE</button>
                </div>
            </div>
        </div>
    );
};

export default Teacher;