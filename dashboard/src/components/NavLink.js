import React from "react";
import { NavLink as Link } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import "../styles/NavLink.css";
const NavLink = (props) => {
    const { path, text, element } = props.link;
    return (
        <>
            {
                <Link to={path}>
                    {(active) => {
                        return <>
                            <li className="link__wrapper nav__link">
                                {element}
                                <span className={`mx-2 active__link  ${active.isActive && " text-sky-600"}`}> {text}</span>
                                <MdNavigateNext className={`nav__next__icon  active__link ${active.isActive && 'active__link__icon'}`} />
                            </li>
                        </>
                    }}
                </Link>
            }
        </>
    );
};

export default NavLink;
