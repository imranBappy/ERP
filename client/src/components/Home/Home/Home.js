import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import AboutHome from '../AboutHome/AboutHome';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import FeatureContent from '../FeatureContent/FeatureContent';
import NavTop from '../NavTop/NavTop';
import RegisterNow from '../RegisterNow/RegisterNow';
import TeacherFeature from '../TeacherFeature/TeacherFeature';
import Teachers from '../Teachers/Teachers';
import WelcomeSection from '../WelcomSection/WelcomeSection';

const Home = () => {
    return (
        <div className='landing_page'>
            <NavTop></NavTop>
            <Navbar></Navbar>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
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