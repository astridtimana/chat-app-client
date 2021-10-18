import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../services/auth'

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = { email, password }

  let history = useHistory();

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    try {
      await postLogin(user)
      return history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container fluid className="w-100 text-center py-3">
      <img src="https://i.pinimg.com/564x/76/e1/b8/76e1b8b96085d2be3421b86000a636a9.jpg" alt="img" className="img-fluid mb-3" width="60%"/>
      <div>
        <h2 className="text-center p-3">¡Bienvenidx!</h2>
        <h5 className="text-center mb-3">Ingresa a tu cuenta</h5>
      </div>
      <Form className="d-flex flex-column align-items-center mb-2"/*  style={{minHeight:"19rem"}} */
        onSubmit={handleSubmit}
      >
        <section className="my-2 w-75 ">
          <Form.Control className="mb-3" type="email" placeholder="Correo" name="email" required
            onChange={(e) => setEmail(e.target.value)} />
          <Form.Control type="password" placeholder="Contraseña" name="password" required
          onChange={(e) => setPassword(e.target.value)} />
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
