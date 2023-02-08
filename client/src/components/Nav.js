import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="flex justify-between  h-16 ">
                    <div className='ml-7 h-16 w-16 '>
                        {/* <h1 className="ml-20 font-bold font-serif text-3xl">Cripto</h1> */}
                        <img src="./images/maxresdefault 1.png" alt="" srcset="" />
                    </div>
                    <div className='mt-4 inline'>
                        <ul className="flex space-x-6 text-lg" >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                            <div><li className="mr-10 ml-10 text-xl"><a href="#" >login</a></li></div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;