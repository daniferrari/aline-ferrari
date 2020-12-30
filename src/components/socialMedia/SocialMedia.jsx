import React from 'react';
import './socialMedia.scss';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

function SocialMedia () {
    return (
        <div className="socialMedia">
            <div className="container">
                <div onClick={() => {window.location.href = "https://www.facebook.com/aline.ferrari.9887";}}>
                    <img src={facebook} alt="Logo do Facebook"/>
                    <p>/aline.ferrari.9887</p>
                </div>
                <div onClick={() => {window.location.href = "https://www.instagram.com/alineferrari8/";}}>
                    <img src={instagram} alt="Logo do Instagram"/>  
                    <p>@alineferrari8</p>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;