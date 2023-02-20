import React from "react";
import img from '../imgs/student.png'
const StdProfile = () => {
    return (
        <div className="light__component  dark:dark__component  ">
            <div className=" m-auto w-80 ">
                <div>
                    <div>
                        <img className=" max-w-md" src={img} alt="" />
                    </div>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div><div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <span>Name : </span> <span>Imran Hossen</span>
                </div>
                <div>
                    <button className="bg-sky-600 hover:bg-grey text-white-900  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                        Download
                    </button>
                </div>
                <div>
                    <button className="bg-sky-600 hover:bg-grey text-white-900  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                        Admit
                    </button>
                    <button className="bg-error hover:bg-grey text-white-900  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StdProfile;
