import React from "react";
import { NavLink as Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import "../styles/NavLink.css";
const NavLink = (props) => {
    const { path, text, element, child } = props.link;

    return (
        <>
            {
                <Link to={path}>
                    {(active) => {
                        return <>
                            <li className=" nav__list_">
                                <div className=" nav__link">
                                    {element}
                                    <span className={`mx-2 active__link  ${active.isActive && " text-sky-600"}`}> {text}</span>
                                    <MdNavigateNext className={`nav__next__icon  active__link ${active.isActive && 'active__link__icon'}`} />
                                </div>
                                {
                                    child &&
                                    active.isActive && <ul className=" ml-4 pl-2 py-2 rounded-md text-white-900  drop__down  bg-white-800 dark:bg-black-800  ">
                                        {
                                            child.map((link, id) => <Link to={link.path} >
                                                {
                                                    (active) => {
                                                        console.log(active);
                                                        return <li key={id} className={`mb-2 hover:bg-sky-600 rounded-md py-1 px-2 mr-3   ${active.isActive ? 'bg-sky-600 text-white-900' : 'bg-white-900 dark:bg-black-700  text-black-900 dark:text-white-900'}`}>{link.text} </li>
                                                    }
                                                }

                                            </Link>)
                                        }
                                    </ul>
                                }
                            </li>
                        </>
                    }}
                </Link>
            }
        </>
    );
};

export default NavLink;
