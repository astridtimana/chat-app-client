import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Dashboard from '../views/Dashboard';
import { Login } from '../views/Login';
import { Register } from '../views/Register';

function PrivateRoute({children, rest}:any) {

  const {isAuthenticated} = useAuth();
  console.log(isAuthenticated);

  return (  
      <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ?  (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function AppRouter() {

    return (
      <Container
        className="d-flex justify-content-evenly text-general align-items-center w-100" 
        /* el align items center lo pone cool pero ya en el chat tendríamos que cambiar
        así que mejor lo vemos luego pero por lo pronto lo podemos dejar ahí uwu */
        style={{ minHeight: "100vh", width: "100vw" }}
      >
        <div className="w-100" style={{minWidth: "400px", maxWidth:"1000px" }} /* style={{ minWidth: "350px" , maxWidth: "500px"}} */>
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
 
export default AppRouter;