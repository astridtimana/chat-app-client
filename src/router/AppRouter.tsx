import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import { Login } from '../views/Login';
import { Register } from '../views/Register';


function AppRouter() {

    return (
      <Container
        className="d-flex justify-content-center text-general"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ minWidth: "350px" , maxWidth: "500px"}}>
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