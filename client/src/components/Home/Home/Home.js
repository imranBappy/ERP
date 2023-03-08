import React from 'react';

// import Navbar from '../../Shared/Navbar/Navbar';
import AboutHome from '../AboutHome/AboutHome';

import BannerParent from '../Banner/BannerParent';

import FeatureContent from '../FeatureContent/FeatureContent';
// import NavTop from '../NavTop/NavTop';
import RegisterNow from '../RegisterNow/RegisterNow';
import TeacherFeature from '../TeacherFeature/TeacherFeature';
import Teachers from '../Teachers/Teachers';
import WelcomeSection from '../WelcomSection/WelcomeSection';

const Home = () => {
    return (
        <div className='landing_page'>

            <BannerParent></BannerParent>
            
            <TeacherFeature></TeacherFeature>
            <AboutHome></AboutHome>
            <WelcomeSection></WelcomeSection>
            <RegisterNow></RegisterNow>
            <Teachers></Teachers>
            <FeatureContent></FeatureContent>
        </div>
    );
};

export default Home;