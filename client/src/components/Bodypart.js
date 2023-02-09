import React, { useState } from "react";
import BodyImage from "./bodyImage";

const Bodypart = ()=>{
    const [imgState,setImgState] = useState(BodyImage);
    
    return(
       
        <>
            <section className="mt-5 ">
                <div className="relative container m-auto">
                    <img src="./images/bodyFirstImg1.png" className="relative w-full opacity-90" alt="" srcset="" />
                    <h3 className="absolute top-52 left-60  text-white text-6xl">Вручение сертификатов<br /> выпускникам курса 2020 г.</h3>
                </div>
            </section>

            <section className="">
                <div className="container m-auto flex mt-20 mb-20">
                    <div className="w-1/2">
                        <img src="./images/secondbodyimg2.png" className="w-11/12" alt="" srcset="" />
                    </div>
                    <div className="w-1/2 mt-5">
                        <h2 className="text-4xl">Вручение сертификатов <br /> выпускникам курса</h2>
                        <p className="text-lg mt-4 mb-20">
                            Сегодня 3 декабря 2020 года в Академии цифровых инноваций состоялось вручение сертификатов выпускникам курса Фронтенд-разработки.
                        </p>
                        <a className="mr-12" href="#"><i className="fa-solid fa-arrow-left p-2"></i>Предыдущий</a>
                        <a href="#">Следующий<i className="fa-solid fa-arrow-right p-2"></i></a>
                </div>
            </div>
        </section>
       
        <div className="ml-28 text-4xl mb-4 mt-16">
            <h1>Последние новости</h1>
        </div>
        <section className="container m-auto flex flex-wrap ">
        {
            imgState.map((curEle)=>{
            return(
                <>
                <div className="w-1/3 p-6 ">
                <img src={curEle.image} className="w-full " alt="" srcset="" />
                <div>
                    <h1 className="text-lg mt-3 mb-3">Вручение сертификатов<br/> выпускникам курса</h1>
                    <p className="flex justify-center mb-9">Сегодня 3 декабря 2020 года в Академии цифровых инноваций состоялось вручение сертификатов</p>
                </div>
            </div>
                </>
            );
        })
        }
        </section>


        <div className="ml-40 text-4xl mb-8 mt-10">
            <h1>Галерея</h1>
        </div>
        <section className="overflow-hidden">
            <div className="container flex flex-row ml-40 " >
                
                <div>
                <img src="./images/fourthbody1.png" className="" alt="" srcset="" />
                </div>
                <div>
                    <img src="./images/fourthbody2.png" className="w-full" alt="" srcset="" />
                </div>
            </div>

            <div className="container m-auto flex ml-40">
             <div>
                    <img src="./images/fourthbody3.png" className="" alt="" srcset="" />
                </div>
                <div>
                    <img src="./images/fourthbody4.png" className="" alt="" srcset="" />
                </div>
                <div>
                    <img src="./images/fourthbody5.png" className="" alt="" srcset="" />
                </div>
                </div>
                </section>



        </>
    )
}

export default Bodypart;