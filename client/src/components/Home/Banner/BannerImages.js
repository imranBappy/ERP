import React from 'react';

const BannerImages = ({slide}) => {
    const {img,des} = slide;
    return (
        <div className='slide_img'>
            <img src={img} alt="" />
            <p>{des}</p>
        </div>
    );
};

export default BannerImages;