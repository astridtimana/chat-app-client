import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

export const Register = () => {

  const [formData, setFormData] = useState({});
  

  console.log(formData);

  return (
    <Container fluid className="d-flex flex-column justify-content-evenly vh-100 f-500 trial">
      <div className="visible-lg-* desktopBg">
        <div>
          <h2 className="text-center p-3">¡Bienvenidx!</h2>
          <h2 className="text-center">Crea tu cuenta</h2>
        </div>
        <Form className="d-flex flex-column justify-content-around" style={{minHeight:"19rem"}}
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              email: { value: string };
              password: { value: string };
              name:{value:string};
            };
            const email = target.email.value; // typechecks!
            const password = target.password.value; 
            const name = target.name.value;
            const userData ={
              name, email, password
            } /// typechecks!
            console.log(userData);
          }}
        >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="mb-3">Nombre</Form.Label>
            <Form.Control type="text" placeholder="John Snow" name="name"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mb-3">Email</Form.Label>
            <Form.Control type="email" placeholder="hola@example.com" name="email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="mb-3">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="******" name="password"/>
          </Form.Group>

          <button type="submit" className="mt-5 w-75 align-self-center btn btn-purple">
            Regístrate
          </button>
        </Form>



        <div className="text-center">
        <p>¿Ya tienes una cuenta?</p>
        <a href='/login' className="purple-font">Inicia Sesión</a>
        </div>
      </div>
    </Container>
  )
}
