import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>CONTACT ME</h2>
        <p className='contactpara'>"¡Hola! Si deseas ponerte en contacto conmigo, no dudes en hacerlo. <br></br>Puedes enviarme un correo electrónico a jordidogo@gmail.com <br></br>o llenar el formulario de contacto a continuación. <br></br>Estoy ansioso por saber más sobre <br></br>ti y tu proyecto."</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+34654070489");
          }}
        >TEXT ME</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>jordidogo</span></p>
      </Container>
    </div>
  )
}

export default Contactpage