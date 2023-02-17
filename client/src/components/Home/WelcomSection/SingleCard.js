import React from 'react';

const SingleCard = ({card}) => {
    const {icon,name,description} = card;
    return (
        <div className="card w-96 w-4/5 mx-auto shadow-xl ">
         
            <figure className="px-10 pt-10">
                {/* <img src={icon} alt="Shoes" className="rounded-xl" /> */}
                <div className="rounded-xl">{icon}</div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Read More</button>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleCard;