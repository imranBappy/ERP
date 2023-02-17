import React from 'react';

const FeatureCard = ({card}) => {
    const {icon,num,des} = card;
    return (
        <div className='f_card_container'>
            <div className='last_card_icon'>{icon}</div>
            <h2>{num}</h2>
            <h3>{des}</h3>
        </div>
    );
};

export default FeatureCard;