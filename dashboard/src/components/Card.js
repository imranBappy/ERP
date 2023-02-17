import React from 'react';
import student from '../imgs/student.png'
import award from '../imgs/award.png'
import Department from '../imgs/Department.png'
import Revenue from '../imgs/Revenue.png'

const Card = () => {
    return (
        <div className="dashboard__card__wrapper flex  t-5 gap-5  flex-wrap  justify-between">
            <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                <div className="card__left">
                    <p className='text-gray-500 text-lg  font-semibold'>Students</p>
                    <p className=' font-bold text-2xl'>50055</p>
                </div>
                <div className="card__right">
                    <img width="50" src={student} alt="" />
                </div>
            </div>

            <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                <div className="card__left">
                    <p className='text-gray-500 text-lg  font-semibold'>Award</p>
                    <p className=' font-bold text-2xl'>50+</p>
                </div>
                <div className="card__right">
                    <img width="50" src={award} alt="" />
                </div>
            </div>
            <div className=" flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                <div className="card__left">
                    <p className='text-gray-500 text-lg  font-semibold'>Department</p>
                    <p className=' font-bold text-2xl'>30+</p>
                </div>
                <div className="card__right">
                    <img width="50" src={Department} alt="" />
                </div>
            </div>

            <div className="flex-grow info_card flex bg-white  basis-80 justify-between p-5 rounded-md shawdow-md">
                <div className="card__left">
                    <p className='text-gray-500 text-lg  font-semibold'>Revenue</p>
                    <p className=' font-bold text-2xl'>$505</p>
                </div>
                <div className="card__right">
                    <img width="50" src={Revenue} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Card;