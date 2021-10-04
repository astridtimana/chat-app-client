import { Container, Form , Button} from 'react-bootstrap';

export const Login = () => {
  return (
    <Container fluid>
      <h2>¡Bienvenidx!</h2>
      <h2>Ingresa a tu cuenta</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="hola@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>

      <p>¿No tienes una cuenta?</p>
      <a>Regístrate</a>

    </Container>
  )
}

