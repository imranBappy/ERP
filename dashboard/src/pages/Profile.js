import React, { useState } from "react";
import coverPhoto from '../imgs/cover_pic.jpg' 
import profilePhoto from '../imgs/profile_pic.jpg' 
import transCript from '../imgs/transCript.webp' 

const Bio = {
        coverPhoto,
        profilePhoto,
        name: "Dilraba Dilmurat",
        email:"dilraba@gmail.com",
        call: 10943439,
        departMent: "CSE",
        ads:"china shanghai, rode-1532",
        father: "Miller Mirik",
        mother: "Malika",
        parent_call: 10943439,
        parent_email: "guardian@gmail.com",
        nid: 23934943

    }


const Profile = () => {
    
    return (
        <div className="light__component  dark:dark__component  ">
            <div className=" m-auto w-full ">

            <div>
                <img className="w-screen h-36 relative" src={Bio.coverPhoto} alt="" srcset="" />
                <img className="w-24 ml-2 h-24 rounded-lg absolute top-52" src={Bio.profilePhoto} alt="" />
            </div>

            <div className="flex lg:gap-x-60 md:gap-x-56 sm:gap-x-36 ml-2 flex-col lg:flex-row md:flex-row sm:flex-row xl:gap-x-80  mt-20 ">
            <div className=" ml-3 text-lg ">
                <h2 className="text-xl font-bold">{Bio.name}</h2>
                <p>{Bio.email}</p>
                <p><span className="font-bold mr-1">Call:</span>{Bio.call}</p>
                <p><span className="font-bold mr-1">Depertment:</span>{Bio.departMent}</p>
                <p><span className="font-bold mr-1">Ads:</span>{Bio.ads}</p>
            </div>
            <div className=" ml-3 mt-10 lg:mt-0 md:mt-0 sm:mt-0 space-y-1">
                <h2 className="text-2xl font-bold">Parent Details</h2>
                <h3><span className="font-bold mr-1">Father:</span>{Bio.father}</h3>
                <h3><span className="font-bold mr-1">Mother:</span>{Bio.mother}</h3>
                <p><span className="font-bold mr-1">Call:</span>{Bio.parent_call}</p>
                <p><span className="font-bold mr-1">Email:</span>{Bio.parent_email}</p>
                <p><span className="font-bold mr-1">Nid:</span>{Bio.nid}</p>
            </div>
            
            </div>
        
            <div className="mt-16 ml-3 lg:mt-20">
                <h3 className="text-center font-bold mb-5 text-2xl uppercase">Transcript</h3>
                <img className="w-screen lg:w-2/3 mb-10 pb-4  mx-auto" src={transCript} alt="" />
            </div>

            </div>
        </div>
    );
};

export default Profile;
