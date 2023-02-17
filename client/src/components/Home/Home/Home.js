import React from 'react';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import FeatureContent from '../FeatureContent/FeatureContent';
import RegisterNow from '../RegisterNow/RegisterNow';
import TeacherFeature from '../TeacherFeature/TeacherFeature';
import Teachers from '../Teachers/Teachers';
import WelcomeSection from '../WelcomSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <WelcomeSection></WelcomeSection>
            <TeacherFeature></TeacherFeature>
            <RegisterNow></RegisterNow>
            <Teachers></Teachers>
            <FeatureContent></FeatureContent>
        </div>
    );
};

export default Home;