import React from 'react';
import FeatureCard from './FeatureCard';
import "./FeatureContent.css"
const FeatureContent = () => {
    const feature_card = [
        {
            id:1,
            icon:<i className="fa-solid fa-calendar-check"></i>,
            num: "1200",
            des: "EVENT PARTICIPATED"
        },
        {
            id:2,
            icon:<i className="fa-solid fa-floppy-disk"></i>,
            num: "1000",
            des: "CLASSES COMPLETE"
        },
        {
            id:3,
            icon:<i className="fa-solid fa-award"></i>,
            num: "500",
            des: "AWRADS WON"
        },
        {
            id:4,
            icon:<i className="fa-brands fa-centercode"></i>,
            num: "300",
            des: "STUDENT ENROLLED"
        }
    ]
    return (
        <div className='feature_container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 cards'>
                {
                    feature_card.map(card => <FeatureCard
                        key={card.id}
                        card={card}
                    ></FeatureCard>)
                }

            </div>
        </div>
    );
};

export default FeatureContent;