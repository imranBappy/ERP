import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;