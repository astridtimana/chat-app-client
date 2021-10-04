import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import { Login } from '../views/Login';
import { Register } from '../views/Register';

function AppRouter() {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/sign-up' component={Register}></Route>
        </Switch>
      </Router>
    );
}
 
export default AppRouter;