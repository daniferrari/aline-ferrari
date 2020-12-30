import React from 'react';
import './clinicInformation.scss';

import earth from '../../assets/icons/earth.svg';

function ClinicInformation () {

    const iframeFada = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Rua%20Dr.%20Adhemar%20Figueiredo%20Lima,%2075+(clinica%20fada)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>';
    const iframeTechTower= '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Av.%20Dr.%20Nelson%20d%C3%81vila,%20389%20-%20Jardim%20Sao%20Dimas+(clinica%20fada)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>';

    return (
        <div id="apointment" className="clinicInformation">
            <h2>MARQUE SUA CONSULTA</h2>

            <div className="Fada">
                <h6>Clinica Fada Saúde</h6>
                <p>Rua Dr. Adhemar Figueiredo Lima, 75 </p>
                <p>Vila Industrial - São José dos Campos - SP</p>

                <div className="webSite">
                    <img src={earth} alt="Icone de site"/>
                    <p>https://clinicafadasaude.com.br/ </p>
                </div>

                <div className="map">
                    <div dangerouslySetInnerHTML={ {__html:  iframeFada}} />
                </div>

            </div>

            <div className="techTower">
                <h6>Centro Médico Tech Tower</h6>
                <p>Av. Dr. Nelson d'Ávila, 1837</p>
                <p>Jardim Sao Dimas, São José dos Campos - SP</p>

                <div className="webSite">
                    <img src={earth} alt="Icone de site"/>
                    <p>https://clinicafadasaude.com.br/ </p>
                </div>

                <div className="map">
                    <div dangerouslySetInnerHTML={ {__html:  iframeTechTower}} />
                </div>
            </div>
        </div>
    );
}

export default ClinicInformation;