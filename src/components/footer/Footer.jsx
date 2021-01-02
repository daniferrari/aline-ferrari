import React from 'react';
import './footer.scss';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import email from '../../assets/icons/email.svg';
import heart from '../../assets/icons/heart.svg';

function Footer () {
    return (
        <div className="footer">
            <div onClick={() => {window.location.href = "https://www.facebook.com/aline.ferrari.9887";}}>
                <img src={facebook} alt="Logo do Facebook"/>
                <p>/aline.ferrari.9887</p>
            </div>

            <div onClick={() => {window.location.href = "https://www.instagram.com/alineferrari8/";}}>
                <img src={instagram} alt="Logo do Instagram"/>
                <p>@alineferrari8</p>
            </div>

            <div onClick={() => {window.location.href = "mailto:draalineferrarigo@gmail.com?subject=Subject&body=message%20goes%20here";}}>
                <img src={email} alt="Icone de e-mail"/>
                <p>draalineferrarigo@gmail.com</p>
            </div>

            <div className="author">
                <p>Feito por Dani com</p>
                <img src={heart} alt="Icone de coração"/>
            </div>

            {/* <p>Entre em contato e faça seu site: https://www.linkedin.com/in/daniele-melo-ferrari-5a8617128/</p> */}

        </div>
    );
}

export default Footer;