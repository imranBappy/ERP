import React from 'react';
import Banner from '../Banner/Banner';
import RegisterNow from '../RegisterNow/RegisterNow';
import WelcomeSection from '../WelcomSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <RegisterNow></RegisterNow>
        </div>
    );
};

export default Home;