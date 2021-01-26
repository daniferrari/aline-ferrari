import React from 'react';
import './expertise.scss';

function Expertise () {

    let expertiseData =  ['Pré-natal', 'Pré-natal de alto risco', 'Contracepção', 'Menopausa', 'Rotina ginecológica', 'Cirurgia ginecológica'];

    let teste = expertiseData.map((item, index) => {
        return (<div key={index}>{item}</div>);
    });
    
    return (
        <div id="expertise" className="expertise">

            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>

            <h2>AREAS DE ATUAÇÃO</h2>

            <div className="itemsContainer hidden">
                {teste}
            </div>
        </div>
    );
}

export default Expertise;