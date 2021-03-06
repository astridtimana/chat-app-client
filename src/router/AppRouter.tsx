import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import { Login } from '../views/Login';
import { Register } from '../views/Register';


function AppRouter() {

    return (
      <Container
        className="d-flex justify-content-center text-general align-items-center" 
        /* el align items center lo pone cool pero ya en el chat tendríamos que cambiar
        así que mejor lo vemos luego pero por lo pronto lo podemos dejar ahí uwu */
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:"400px"}} /* style={{ minWidth: "350px" , maxWidth: "500px"}} */>
          <Router>
            <Switch>
              <Route exact path='/' component={Dashboard}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/sign-up' component={Register}></Route>
            </Switch>
          </Router>
        </div>
      </Container>
    );
}
 
export default AppRouter;