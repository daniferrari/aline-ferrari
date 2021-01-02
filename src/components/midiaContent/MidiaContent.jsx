import React, { useState } from 'react';
import './midiaContent.scss';

import Carousel from 'react-bootstrap/Carousel';

//Images
import aline1 from '../../assets/images/aline1.png';

function MidiaContent () {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div id="midia" className="midiaContent">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="item">
                        <h3>VOCÊ SABE O QUE É PREMATURIDADE?</h3>

                        <p>
                            Os bebês prematuros são considerados aqueles que nascem antes de 37 semanas de gestação. <br/>
                            A prematuridade extrema são os bebezinhos que nascem com menos de 28 semanas de gestação e por esse motivo inspiram cuidados intensivos.<br/>

                            São diversas as causas da prematuridade, mas na grande maioria das vezes, está ligado a fatores maternos, 
                            tais como hipertensão, descolamento prematuro de placenta, infecções, malformações uterinas, colo curto, entre outros.<br/>

                            O risco de parto prematuro aumenta naquelas pacientes que tiveram partos prematuros anteriores, 
                            tabagistas e nas gestações gemelares.<br/>

                            Sabemos que a prematuridade é uma das principais causas de morte infantil. Sabemos também que grande 
                            parte desses nascimentos antes do tempo podem ser diminuídos com um pre natal adequado.<br/>

                            Por isso, se esta se planejando para engravidar procure seu ginecologista / obstetra para uma boa avaliação 
                            pre concepcional a fim de minimizar os riscos futuros e caso já esteja com seu pacotinho no útero faça as consultas de pré natal regularmente!
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item">
                        <h3>O que é pessário vaginal?</h3>

                        <p>
                            Trata- se de um dispositivo, geralmente confeccionado com silicone, utilizado principalmente nos casos de prolapsos genitais.<br/>

                            Existem diversos modelos, tais como: gelhorn, donut e anel. Inclusive as mulheres que utilizam deste ultimo, podem manter as 
                            relações sexuais com o pessario.<br/>

                            Os pessarios são mais utilizados por aquelas pacientes que tem contra-indicação a cirurgia ou aquelas que desejam tratamento conservador. 
                            Em alguns países cerca de 85% das pacientes com prolapso genital são adeptas deste método.<br/>

                            Esses dispositivos são de fácil colocação, baixo custo, com bons resultados que são sentidos imediatamente após a colocação pela paciente, 
                            permitindo que a mulher realize suas atividades diárias normalmente. A colocação é feita em consultório e não requer anestesia. 
                            A retirada para limpeza pode ser feita pela paciente, na maioria das vezes, ou no consultorio.<br/>

                            Algumas complicações, porém, podem acontecer sendo as mais comuns: desconforto, falha na colocação, aumento de secreção e odor vaginal.<br/>

                            Procure um ginecologista de confiança para conversar sobre este assunto.
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="item">
                        <h3>Voce sabe o que é prolapso vaginal?</h3>

                        <p>
                            O prolapso genital feminino ocorre por deficiência ou lesão dos tecidos de suspensão e/ou sustentação dos órgãos pélvicos, 
                            havendo deslocamento de órgãos como útero, bexiga e intestino.<br/>

                            É aquela famosa “ bola na vagina” ou “bexiga caída”.<br/>

                            É uma condição que atinge cerca de 15 a 30% das mulheres acima de 50 anos.<br/>

                            Dentre os fatores de risco para esses prolapsos encontram-se: índice de massa corporal (IMC), numero de partos, 
                            historia familiar positiva para prolapsos genitais.<br/>

                            Com relação aos tratamento incluem-se:<br/>

                            - Mudanças no estilo de vida – perder peso, cessar tabagismo<br/>

                            - Fisioterapia do assoalho pélvico.<br/>

                            - Pessarios<br/>

                            - Cirurgia<br/>

                            Se você tem essa condição, procure um ginecologista de confiança que ele irá indicar o melhor tratamento pra você.
                        </p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MidiaContent;