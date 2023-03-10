import React from 'react';
import StudentsChart from './StudentsChart';
import Overview from './Overview';
import '../styles/Analytics.css'
const Analytics = () => {
    return (
        <div className='dashboard__analytics flex  flex-wrap justify-between gap-5 '>
            <div className="dashboard__overview light__component dark:dark__component basic-96 flex-grow"  >
                <h4 className=' title-h4'>Overview</h4>
                <Overview />
            </div>
            <div className="dashboard__students light__component dark:dark__component basic-96 flex-grow">
                <h4 className='title-h4'>Number of Students</h4>
                <StudentsChart />
            </div>
        </div>
    );
};

export default Analytics;