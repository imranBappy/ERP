import { RxDashboard } from 'react-icons/rx';
import { SlGraduation } from 'react-icons/sl';

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
        path: '/students',
        element: <SlGraduation className='active__link' />,
        text: 'Students',
        child: [
            {
                text: 'Student Add',
                path: '/students/add',
            }
        ]
    },
    {
        path: '/teachers',
        element: <GiTeacher className='active__link' />,
        text: 'Teachers'
    }, {
        path: '/departments',
        element: <BiBuildingHouse className='active__link' />,
        text: 'Departments',
        child: [
            {
                text: 'Department Add',
                path: '/departments/add',
            }
        ]
    },
    {
        path: '/admission',
        element: <BiBuildingHouse className='active__link' />,
        text: 'Admission'
    },
    {
        path: '/invoices',
        element: <TbFileInvoice className='active__link' />,
        text: 'Invoices'
    }, {
        path: '/accounts',
        element: <FaFileInvoiceDollar className='active__link' />,
<<<<<<< HEAD
        text: 'Accounts',
        child: [
            {
                text: 'Account Add',
                path: '/accounts/add',
            }
        ]
=======
        text: 'Accounts'
>>>>>>> imran
    }, {
        path: '/holiday',
        element: <MdOutlineHolidayVillage className='active__link' />,
        text: 'Holiday'
    }
]

export default navLinks;