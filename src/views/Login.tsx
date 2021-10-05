import { useState } from 'react';
import { Container, Form , Button} from 'react-bootstrap';

export const Login = () => {

  const [formData, setFormData] = useState({});
  const handleInputChange = ({event}:any) => {
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })
  }



  return (
    <Container fluid>
      <h2>¡Bienvenidx!</h2>
      <h2>Ingresa a tu cuenta</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="hola@example.com" onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>

      <p>¿No tienes una cuenta?</p>
      <a href='/sign-up'>Regístrate</a>

    </Container>
  )
}

