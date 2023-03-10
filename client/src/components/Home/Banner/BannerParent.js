import React from 'react';
import BannerBottom from '../BannerBottom/BannerBottom';
import Banner from './Banner';

const BannerParent = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
        </div>
    );
};

export default BannerParent;