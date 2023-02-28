import React, { useEffect, useState } from "react";
import coverPhoto from '../imgs/cover_pic.jpg'

import { useParams } from "react-router-dom";
import axios from "axios";


const URL_PREFIX = 'http://localhost:5000/uploads/'

const Profile = () => {
    const [std, setStd] = useState({
        profile: {}
    })
    let { stdId } = useParams();
    useEffect(() => {
        axios.get('/admission/' + stdId).then(res => {
            setStd(res.data)
        })
            .catch(err => console.log(err))
    }, [])
    console.log(std);
    return (
        <div className="light__component  dark:dark__component  ">
            <div className=" m-auto w-full ">

                <div>
                    <img className="w-screen h-36 relative" src={coverPhoto} alt="" srcset="" />
                    <img className="w-24 ml-2 h-24 rounded-lg absolute top-52" src={`${URL_PREFIX}${std['url']}`} alt="" />
                </div>

                <div className="flex lg:gap-x-60 md:gap-x-56 sm:gap-x-36 ml-2 flex-col lg:flex-row md:flex-row sm:flex-row xl:gap-x-80  mt-20 ">
                    <div className=" ml-3 text-lg ">
                        <h2 className="text-xl font-bold">{`${std['name']}`}</h2>
                        <p>{std['email']}</p>
                        <p><span className="font-bold mr-1">Call:</span>{std['profile']['phone']}</p>
                        <p><span className="font-bold mr-1">Depertment:</span>Computer</p>
                        <p><span className="font-bold mr-1">Ads:</span>{std['profile']['address']}</p>
                    </div>
                    <div className=" ml-3 mt-10 lg:mt-0 md:mt-0 sm:mt-0 space-y-1">
                        <h2 className="text-2xl font-bold">Parent Details</h2>
                        <h3><span className="font-bold mr-1">Father:</span>{std['profile']['fatherName']}</h3>
                        <h3><span className="font-bold mr-1">Mother:</span>{std['profile']['motherName']}</h3>
                        <p><span className="font-bold mr-1">Call:</span>{std['profile']['guardianPhone']}</p>
                        <p><span className="font-bold mr-1">Email:</span>guardian@gmail.com</p>
                        <p><span className="font-bold mr-1">Nid:</span>{std['profile']['guardianNID']}</p>
                    </div>

                </div>

                <div className="mt-16 ml-3 lg:mt-20">
                    <h3 className="text-center font-bold mb-5 text-2xl uppercase">Transcript</h3>
                    <img className="w-screen lg:w-2/3 mb-10 pb-4  mx-auto" src={`${URL_PREFIX}${std['profile']['transcript']}`} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Profile;
