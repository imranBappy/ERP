import React from 'react';
import Banner from '../Banner/Banner';
import FeatureContent from '../FeatureContent/FeatureContent';
import RegisterNow from '../RegisterNow/RegisterNow';
import Teachers from '../Teachers/Teachers';
import WelcomeSection from '../WelcomSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <RegisterNow></RegisterNow>
            <Teachers></Teachers>
            <FeatureContent></FeatureContent>
        </div>
    );
};

export default Home;