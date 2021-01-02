import React from 'react';
import './socialMedia.scss';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import email from '../../assets/icons/email.svg';

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
                <div className="email" onClick={() => {window.location.href = "mailto:aline.cristina.melo.ferrari@gmail.com?subject=Subject&";}}>
                    <img src={email} alt="Icone de email"/>  
                    <p>aline.cristina.melo.ferrari@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
