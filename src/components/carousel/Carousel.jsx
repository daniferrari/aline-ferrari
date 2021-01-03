import React, { useState } from 'react';
import './carousel.scss';

import Carousel from 'react-bootstrap/Carousel';


//Images
import aline1 from '../../assets/images/aline1.png';
import aline2 from '../../assets/images/aline2.png';
import logo from '../../assets/images/logo.png';

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
                        <img src={aline2} alt="Foto de Aline"/>

                        <div className="carouselInfo">
                            <img src={logo} alt="logo da doutora Aline"/>
                            <h5>TESTE ESCRIOT</h5>
                            <p>AHSUAHSUHASUHAUSH AUSHUASHUASHUAHSUAHS</p>
                            <p>AHSUAHSUHASUHAUSH AUSHUASHUASHUAHSUAHS</p>
                        </div>
                    </div>
                    
                </Carousel.Item>

                <Carousel.Item>

                    <div className="carouselItem">
                        <img src={aline1} alt="Foto de Aline"/>

                        <div className="carouselInfo">
                            <img src={logo} alt="logo da doutora Aline"/>
                            <h5>TESTE ESCRIOT</h5>
                            <p>AHSUAHSUHASUHAUSHAU SHUASHUASHUAHSUAHS</p>
                            <p>AHSUAHSUHASUHAUSHAUS HUASHUASHUAHSUAHS</p>
                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default CarouselFunction;