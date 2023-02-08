import React from "react";

const Footer = ()=>{
    return(
        <>  
        <footer className="bg-slate-800 py-12 mt-24 ">
            <div className="container flex ml-40 text-white px-2 ">
                <div className="w-1/3">
                <h3 className="mb-4">Paliteh</h3>
                <p>Об университете</p>
                <p>Абитуриенту</p>
                <p>Студентам</p>
                <p>Курсы</p>
                <p>Контакты</p>
                <p className="mt-12">copy@ by education</p>
                </div>
                <div className="w-1/3">
                <h3 className="mb-4">Подпишись на нас</h3>
                <a href="" className="block"><i className="fa-brands fa-square-facebook p-2"></i>faceBook</a>
                <a href=""><i className="fa-brands fa-instagram p-2"></i>WhatsApp</a>
                </div>
                <div className="w-1/3">
                <h3 className="mb-4">Получай новости первым</h3>
                <input type="text" className="p-1" placeholder="Email" />
                </div>
            </div>
        </footer>


        </>
    )
}

export default Footer;