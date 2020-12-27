import React from 'react';
import './footer.scss';

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import email from '../../assets/icons/email.svg';
import heart from '../../assets/icons/heart.svg';

function Footer () {
    return (
        <div className="footer">
            <div>
                <img src={facebook} alt="Logo do Facebook"/>
                <p>/aline.ferrari.9887</p>
            </div>

            <div>
                <img src={instagram} alt="Logo do Instagram"/>
                <p>@alineferrari8</p>
            </div>

            <div>
                <img src={email} alt="Icone de e-mail"/>
                <p>alinecri@yahoo.com.br</p>
            </div>

            <div className="author">
                <p>Feito por Dani com</p>
                <img src={heart} alt="Icone de coração"/>
            </div>

        </div>
    );
}

export default Footer;