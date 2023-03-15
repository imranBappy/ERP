import React, { useEffect } from 'react';

import '../styles/dashboard.css';
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { Navigate, Outlet } from "react-router-dom";
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { authGetAction } from '../app/actions/authAction'

const Layout = (props) => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token')
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        }
        props.authGetAction();
    }, []);

    const { isAuthintication, isLoading } = props.auth;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    return isLoading ? <h1>Looding...</h1> :
        <>
            {
                isAuthintication ?
                    <div className='flex w-full relative'>
                        <Drawer handleOpen={[open, setOpen]} />
                        <div className="dashboard__wrapper grow">
                            <Header handleOpen={handleOpen} />
                            <div className="dashboard__content  bg-white-800 dark:bg-black-800 dark:text-white-900 p-5 ">
                                <Outlet />
                            </div>
                        </div>
                    </div > :
                    <Navigate to="/login" />
            }
        </>;

};
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};
export default connect(mapStateToProps, {
    authGetAction
})(Layout);