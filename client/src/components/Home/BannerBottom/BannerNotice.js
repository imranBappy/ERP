import React from 'react';

const BannerNotice = ({notice}) => {
    const {n1} = notice;
    return (
        <div>
            <p>{n1}</p>
        </div>
    );
};

export default BannerNotice;