import React, { useState } from 'react';
import './carousel.scss';

import Carousel from 'react-bootstrap/Carousel';


//Images
import aline1 from '../../assets/images/aline1.png';
import aline2 from '../../assets/images/aline2.png';

function CarouselFunction () {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="carouselIntroduction">
            <Carousel activeIndex={index} onSelect={handleSelect} className="carouselContainer">
                <Carousel.Item>
                    <img src={aline2} alt="Foto de Aline"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={aline1} alt="Foto de Aline"/>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={aline1} alt="Foto de Aline"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselFunction;