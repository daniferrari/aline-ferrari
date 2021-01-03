import React from 'react';
import './expertise.scss';

function Expertise () {

    let expertiseData =  ['Pré-natal', 'Pré-natal de alto risco', 'Contracepção', 'Menopausa', 'Rotina ginecológica', 'Cirurgia ginecológica'];

    let teste = expertiseData.map((item, index) => {
        return (<div key={index}>{item}</div>);
    });
    
    return (
        <div id="expertise" className="expertise">
            <h2>AREAS DE ATUAÇÃO</h2>

            <div className="itemsContainer">
                {teste}
            </div>
        </div>
    );
}

export default Expertise;