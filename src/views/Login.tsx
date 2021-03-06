// import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

export const Login = () => {

  /* const [formData, setFormData] = useState({});
  const handleInputChange = ({event}:any) => {
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
    })
  } */



  return (
    <Container fluid className="w-100 text-center py-3">
      <img src="https://i.pinimg.com/564x/76/e1/b8/76e1b8b96085d2be3421b86000a636a9.jpg" alt="img" className="img-fluid mb-3" width="60%"/>
      <div>
        <h2 className="text-center p-3">¡Bienvenidx!</h2>
        <h5 className="text-center mb-3">Ingresa a tu cuenta</h5>
      </div>
      <Form className="d-flex flex-column align-items-center mb-2"/*  style={{minHeight:"19rem"}} */
         /* onSubmit={} */
      >
        <section className="my-2 w-75 ">
            <Form.Control className="mb-3" type="email" placeholder="Correo" name="email" required/>
            <Form.Control type="password" placeholder="Contraseña" name="password" required/>
        </section>

        <button type="submit" className="mt-3 mb-2 w-75 align-self-center btn btn-purple">
          Iniciar sesión
        </button>
      </Form>



      <div className="text-center mt-3">
        <p>¿No tienes una cuenta?</p>
        <a href='/sign-up' className="purple-font">Regístrate</a>
      </div>

    </Container>
  )
}
