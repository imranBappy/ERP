import React from 'react';
import SingleCard from './SingleCard';
import "./WelcomeSection.css";

import "./WelcomeSection.css";

const WelcomeSection = () => {
    const cardData = [
        {
            id: 1,
            icon: <i class="fa-solid fa-graduation-cap"></i>,
            name: "Program",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },
        {
            id: 2,
            icon: <i class="fa-solid fa-chart-pie"></i>,
            name: "Affordability",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },
        {
            id: 3,
            icon: <i class="fa-sharp fa-solid fa-certificate"></i>,
            name: "Certification",
            description: "The technical writing profession is continuously evolving as technical logitech...",

        },

    ]

    return (
        <div className='welcom_section mx-auto '>
            <div className="wel_container">
                <div className='welcome_header'>
                    <h1 className='text-4xl'>Welcome to University</h1>
                    <h3>Study Point is a international leader in teaching students to write effectively,learn from each other and think for themselves.</h3>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cards'>
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