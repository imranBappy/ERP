import { RxDashboard } from 'react-icons/rx';
import { AiTwotoneHome } from 'react-icons/ai';

const navLinks = [
    {
        path: '/',
        element: <RxDashboard className='active__link' />,
        text: 'Dashboard'
    },
    {
        path: '/',
        element: <AiTwotoneHome className='active__link' />,
        text: 'Dashboard2'
    },
    {
        path: '/',
        element: <RxDashboard className='active__link' />,
        text: 'Dashboard3'
    }, {
        path: '/',
        element: <RxDashboard className='active__link' />,
        text: 'Dashboard4'
    }
]

export default navLinks;