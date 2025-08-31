import React from 'react';
import banner from '../assets/banner.png';

interface BannerComponentProps {
    height?: string;
    width?: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({ height = '60', width = '90' }) => {
    return (
    <div>
        <img className={`h-${height} w-${width}`} alt="banner.png" src={banner}/>
    </div>
    );
};

export default BannerComponent;