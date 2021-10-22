import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import Dashboard from '../views/Chat';
import { Login } from '../views/Login';
import { Register } from '../views/Register';


export const AppRouter = () => {

    return (
      <Container
        /* className="d-flex justify-content-center text-general align-items-center"   */
        /* el align items center lo pone cool pero ya en el chat tendríamos que cambiar
        así que mejor lo vemos luego pero por lo pronto lo podemos dejar ahí uwu */
        /* style={{ minHeight: "100vh" *//* , width: "100vw"  */ /* }} */
      >
        <div /* className="w-100" */ /* style={{minWidth: "400px", maxWidth:"1000px" }}  *//* style={{ minWidth: "350px" , maxWidth: "500px"}} */>
          <Router>
            <AuthProvider>
              <Switch>
                {/* <Route exact path='/' component={Dashboard}></Route> */}
                <Route path='/login' component={Login}></Route>
                <Route path='/sign-up' component={Register}></Route>
                <PrivateRoute path='/'><Dashboard/></PrivateRoute>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    );
}
 