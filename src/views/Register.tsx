import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { postUser } from '../services/users';

export const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register, isAuthenticated} = useAuth()

  const user = { name, email, password }

  let history = useHistory();

  const handleSubmit =  (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    register(user)
    // console.log(isAuthenticated);
    // if(isAuthenticated){history.push('/');}
  }


  return (
    <Container fluid className="w-100 text-center py-3 d-flex flex-row justify-content-evenly">
      <img
        src="https://i.pinimg.com/564x/76/e1/b8/76e1b8b96085d2be3421b86000a636a9.jpg"
        alt="img"
        className="img-fluid mb-3 d-none d-md-block"
        width="60%"
      />

      <div className="userForm text-center "
        style={{maxWidth: "600px", minWidth: "375px"}}
        >
        <img
          src="https://i.pinimg.com/564x/76/e1/b8/76e1b8b96085d2be3421b86000a636a9.jpg"
          alt="img"
          className="mx-auto d-block d-sm-none"
          width="60%"
        
        />
        <div>
          <h2 className="text-center p-3">¡Bienvenidx!</h2>
          <h5 className="text-center">Crea tu cuenta</h5>
        </div>

        <Form
          className="d-flex flex-column align-items-center" /*  style={{minHeight:"19rem"}} */
          onSubmit={handleSubmit}
        >
          <section className="my-2 w-75 ">

            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>

          <button
            type="submit"
            className="mt-3 mb-2 w-75 align-self-center btn btn-purple"
          >
            Regístrate
          </button>
        </Form>

        <div className="text-center mt-3">
          <p>¿Ya tienes una cuenta?</p>
          <a href="/login" className="purple-font">
            Inicia Sesión
          </a>
        </div>
      </div>
    </Container>
  );
};
