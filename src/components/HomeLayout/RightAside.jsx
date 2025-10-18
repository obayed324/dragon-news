import React from 'react';
import FindUs from './FindUs/FindUs';
import SocialLogin from './Login/SocialLogin';
import QZone from './QZone/QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;