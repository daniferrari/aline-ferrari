import React from 'react';
import './introduction.scss';

import aline1 from '../../assets/images/aline1.png';

function Introduction () {
    return (
        <div id="introduction" className="Introduction">
        
            <div>
                <h2>Dra. Aline Ferrari</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
            </div>

            <div>
                <img src={aline1} alt="Foto de Aline"/>
            </div>

        </div>
    );
}

export default Introduction;