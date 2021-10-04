import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export const Register = () => {
  return (
    <Container fluid>
      <h2>¡Bienvenidx!</h2>
      <h2>Crea tu cuenta</h2>

      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="John Snow" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="hola@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Regístrate
        </Button>
      </Form>

      <p>¿Ya tienes una cuenta?</p>
      <a href='/login'>Inicia Sesión</a>

    </Container>
  )
}
