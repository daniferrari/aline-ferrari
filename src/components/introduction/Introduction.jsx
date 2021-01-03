import React from 'react';
import './introduction.scss';

import aline1 from '../../assets/images/aline1.png';
import logo from '../../assets/images/logo.png';

function Introduction () {
    return (
        <div id="introduction" className="Introduction">
        
            <div>
                {/* <img src={logo} alt="logo da doutora Aline"/> */}
                <h2>QUEM SOU EU</h2>
                <p>
                    <span className="firstLetter">S</span>ou formada em medicina pela universidade federal de santa catarina e resolvi fazer especialização em ginecologia e obstetricia no ultimo ano 
                    da faculdade, por perceber que essa especialidade nos permite atuar em diversos ramos diferentes, cuidar de maneira mais global da saude da mulher 
                    e fazer parte de um dos momentos mais lindos na vida das pessoas, o nascimento de seus filhos. <br />

                    Minha especialização foi realizada no hospital municipal jose de carvalho florence na cidade de São Jose dos Campos,
                    no qual tive a oportunidade de aprender muito. <br />

                    Tento estar sempre estudando e buscando atualização para melhor ajudar minhas pacientes.
                </p>
            </div>

            <div className="introductionImg">
                <img src={aline1} alt="Foto de Aline"/>
            </div>

        </div>
    );
}

export default Introduction;