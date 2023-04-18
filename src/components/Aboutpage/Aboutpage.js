import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mi</span></h3>
                        <p className='aboutdetails'>¡Bienvenido a mi página web! Mi nombre es Jorge, Soy un apasionado de la tecnología y la creatividad, y me encanta explorar diferentes formas de combinarlas. Manejo diferentes lenguajes de programación como Java, C, C++, Python y Mips, y he desarrollado habilidades en el uso de tecnologías web modernas como React.js.
Pero la programación no es mi única pasión. También disfruto mi tiempo libre como fotógrafo y filmaker.<br />
<br /> Actualmente, estoy estudiando Ingeniería Informatica en la Universidad de la Laguna, mientras desarrollo un proyecto relacionado con el mundo del motor en Youtube, mi otra pasión. <br />
<br /> En mi página web, puedes encontrar información sobre mis habilidades en programación, proyectos de software y mi portafolio como fotógrafo y filmaker.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>C++</li>
                                    <li>C</li>
                                    <li>Python</li>
                                    <li>React Js</li>
                                    <li>Material-ui</li>
                                </Col>
                                <Col md={5}>
                                    
                                    <li>Git/Github</li>
                                    <li>Adobe Photoshop </li>
                                    <li>Adobe Premiere Pro</li>
                                    <li>Lightroom</li>
                                    <li>Adobe Illustrator</li>
                                </Col>

                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage