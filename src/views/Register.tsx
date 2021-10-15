import React/*, { useState }*/from 'react';
import { Container, Form } from 'react-bootstrap';

export const Register = () => {

  // const [formData, setFormData] = useState({});
  
  const handleSubmit = (e: React.SyntheticEvent) => {
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
    }

  // console.log(formData);

  return (
    <Container fluid className="w-100 text-center py-3">
      <img src="https://i.pinimg.com/564x/76/e1/b8/76e1b8b96085d2be3421b86000a636a9.jpg" alt="img" className="img-fluid mb-3" width="60%"/>
      <div>
        <h2 className="text-center p-3">¡Bienvenidx!</h2>
        <h5 className="text-center">Crea tu cuenta</h5>
      </div>
      <Form className="d-flex flex-column align-items-center"/*  style={{minHeight:"19rem"}} */
         onSubmit={handleSubmit}
      >
        <section className="my-2 w-75 ">
          {/* <Form.Group className="mb-3" controlId="name">
            <Form.Label className="mb-3">Nombre</Form.Label> */}
            <Form.Control className="mb-3" type="text" placeholder="Name" name="name" required/>
          {/* </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="mb-3">Email</Form.Label> */}
            <Form.Control className="mb-3" type="email" placeholder="Correo" name="email" required/>
          {/* </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="mb-3">Contraseña</Form.Label> */}
            <Form.Control type="password" placeholder="Contraseña" name="password" required/>
          {/* </Form.Group> */}
        </section>

        <button type="submit" className="mt-3 mb-2 w-75 align-self-center btn btn-purple">
          Regístrate
        </button>
      </Form>



      <div className="text-center mt-3">
        <p>¿Ya tienes una cuenta?</p>
        <a href='/login' className="purple-font">Inicia Sesión</a>
      </div>
    </Container>
  )
}
