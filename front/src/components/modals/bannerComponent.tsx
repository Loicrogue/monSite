import React from 'react';
import banner from '../../assets/banner.png';

const bannerComponent: React.FC = () => (
    <div>
        <img className='h-60 w-90' alt="banner.png" src={banner}/>
    </div>
);

export default bannerComponent;