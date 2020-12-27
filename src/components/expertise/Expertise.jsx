import React from 'react';
import './expertise.scss';

function Expertise () {

    let expertiseData =  ['Endometriose', 'Insersão de DIU', 'Anticoncepção', 'Partos'];

    let teste = expertiseData.map((item, index) => {
        return (<div key={index}>{item}</div>);
    });
    
    return (
        <div className="expertise">
            <h2>ESPECIALIDADES</h2>

            <div className="itemsContainer">
                {teste}
            </div>
        </div>
    );
}

export default Expertise;