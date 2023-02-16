import React from 'react';
import FeatureCard from './FeatureCard';
import "./FeatureContent.css"
const FeatureContent = () => {
    const feature_card = [
        {
            id:1,
            icon:<i class="fa-regular fa-mask-ventilator"></i>,
            num: "1200",
            des: "EVENT PARTICIPATED"
        },
        {
            id:2,
            icon:<i class="fa-solid fa-clipboard-list-check"></i>,
            num: "1000",
            des: "CLASSES COMPLETE"
        },
        {
            id:3,
            icon:<i class="fa-sharp fa-regular fa-trophy"></i>,
            num: "500",
            des: "AWRADS WON"
        },
        {
            id:4,
            icon:<i class="fa-solid fa-file-check"></i>,
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