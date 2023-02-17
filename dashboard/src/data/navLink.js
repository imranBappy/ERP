import { RxDashboard } from 'react-icons/rx';
import { SlGraduation } from 'react-icons/sl';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FcDepartment } from 'react-icons/fc';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { TbFileInvoice } from 'react-icons/tb';
import { GiTeacher } from 'react-icons/gi';
import { BiBuildingHouse } from 'react-icons/bi';


import { MdOutlineHolidayVillage } from 'react-icons/md';

const navLinks = [
    {
        path: '/',
        element: <RxDashboard className='active__link' />,
        text: 'Dashboard'
    },
    {
        path: '/',
        element: <SlGraduation className='active__link' />,
        text: 'Students'
    },
    {
        path: '/',
        element: <GiTeacher className='active__link' />,
        text: 'Teachers'
    }, {
        path: '/',
        element: <BiBuildingHouse className='active__link' />,
        text: 'Departments'
    }, {
        path: '/',
        element: <TbFileInvoice className='active__link' />,
        text: 'Invoices'
    }, {
        path: '/',
        element: <FaFileInvoiceDollar className='active__link' />,
        text: 'Accounts'
    }, {
        path: '/',
        element: <MdOutlineHolidayVillage className='active__link' />,
        text: 'Holiday'
    }
]

export default navLinks;