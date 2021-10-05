import React from 'react'
import { Container, Form } from 'react-bootstrap'


export const Register = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-evenly vh-100 ">

      <div>
        <h2 className="text-center p-3">¡Bienvenidx!</h2>
        <h2 className="text-center">Crea tu cuenta</h2>
      </div>
      <Form className="d-flex flex-column justify-content-around" style={{minHeight:"19rem"}}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="mb-3">Nombre</Form.Label>
          <Form.Control type="text" placeholder="John Snow" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-3">Email</Form.Label>
          <Form.Control type="email" placeholder="hola@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-3">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <button type="submit" className="mt-5 w-75 align-self-center btn">
          Regístrate
        </button>
      </Form>



      <div className="text-center">
      <p>¿Ya tienes una cuenta?</p>
      <a href='/login'>Inicia Sesión</a>
      </div>

    </Container>
  )
}
