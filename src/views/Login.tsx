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
    <Container fluid className="d-flex flex-column justify-content-evenly vh-100 f-500 trial">
      <h2 className="text-center p-3">¡Bienvenidx!</h2>
      <h2 className="text-center">Ingresa a tu cuenta</h2>
      <Form className="d-flex flex-column justify-content-around" style={{minHeight:"19rem"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="hola@example.com" onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="******" onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-5 w-75 align-self-center btn btn-purple">
          Ingresar
        </Button>
      </Form>

      <p>¿No tienes una cuenta?</p>
      <a href='/sign-up'>Regístrate</a>

    </Container>
  )
}

