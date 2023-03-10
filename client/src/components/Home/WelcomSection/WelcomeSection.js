import React from 'react';
import SingleCard from './SingleCard';
import "./WelcomeSection.css";

import "./WelcomeSection.css";

const WelcomeSection = () => {
    const cardData = [
        {
            id: 1,
            icon: <i className="fa-solid fa-graduation-cap"></i>,
            name: "Program",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },
        {
            id: 2,
            icon: <i className="fa-solid fa-chart-pie"></i>,
            name: "Affordability",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },
        {
            id: 3,
            icon: <i className="fa-sharp fa-solid fa-certificate"></i>,
            name: "Certification",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },

    ]

    return (
        <div className='welcom_section mb-32'>
            <div className="wel_container max-w-[1500px] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        cardData.map(card => <SingleCard
                            key={card.id}
                            card={card}
                        ></SingleCard>)
                    }


                </div>
            </div>

        </div>
    );
};

export default WelcomeSection;