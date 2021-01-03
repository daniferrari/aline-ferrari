import React, { useState } from 'react';
import './carousel.scss';

import Carousel from 'react-bootstrap/Carousel';


//Images
import aline1 from '../../assets/images/aline1.png';
import aline2 from '../../assets/images/aline2.png';
import logo from '../../assets/images/logo2.png';
import cancerMama from '../../assets/images/cancer-mama.png';

function CarouselFunction () {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="carouselIntroduction">
            <Carousel activeIndex={index} onSelect={handleSelect} className="carouselContainer">
                <Carousel.Item>

                    <div className="carouselItem">
                        {/* <img src={aline2} alt="Foto de Aline"/> */}

                        <div className="carouselInfo">
                            <img src={logo} alt="logo da doutora Aline"/>
                            <h5>Exames ginecológicos fundamentais no período da pós-menopausa</h5>
                            <p>* Mamografia</p>
                            <p>* Ultrassonografia pélvica</p>
                            <p>* Exames de sangue</p>
                            <p>* Exame preventivo do colo de útero</p>
                            <p>* Densitometria óssea</p>
                        </div>
                    </div>
                    
                </Carousel.Item>

                <Carousel.Item>

                    <div className="carouselItem">
                        {/* <img src={aline1} alt="Foto de Aline"/> */}

                        <div className="carouselInfo">
                            <img src={cancerMama} alt="logo da doutora Aline"/>
                            <h5>Cancer de mama</h5>
                            <p>Faça o autoexame regularmente</p>
                            <p>Previna-se!</p>
                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CarouselFunction;