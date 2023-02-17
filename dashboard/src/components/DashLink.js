import React from "react";
import { NavLink } from "react-router-dom";

import { MdNavigateNext } from "react-icons/md";
import "../styles/DashLink.css";
const DashLink = (props) => {
    const { path, text, element } = props.link;
    console.log(props.link);
    return (
        <>
            {
                <NavLink to={path}>
                    {(active) => {
                        return <>
                            <li className="link__wrapper dash__link">
                                {element}
                                <span className={`mx-2 active__link  ${active.isActive && " text-sky-600"}`}> {text}</span>
                                <MdNavigateNext className={`nav_next  active__link ${active.isActive && 'active__link__icon'}`} />
                            </li>
                        </>
                    }}
                </NavLink>
            }
        </>
    );
};

export default DashLink;
