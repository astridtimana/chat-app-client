import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../views/Chat";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { SocketProvider } from "../context/SocketContext";
import { ChatProvider } from "../context/chat/ChatContext";
// import socket from '../components/Socket';

export const AppRouter = () => {
  // socket.emit('connected', 'Holis from client')

  return (
    <Container
      fluid /* , width: "100vw"  */ /* }} */
      /* className="d-flex justify-content-center text-general align-items-center"   */
      /* el align items center lo pone cool pero ya en el chat tendríamos que cambiar
        así que mejor lo vemos luego pero por lo pronto lo podemos dejar ahí uwu */
      /* style={{ minHeight: "100vh" */
    >
      <div /* className="w-100" */ /* style={{minWidth: "400px", maxWidth:"1000px" }}  */ /* style={{ minWidth: "350px" , maxWidth: "500px"}} */
      >
        <Router>
          <ChatProvider>
            <AuthProvider>
              <SocketProvider>
                <Switch>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/sign-up" component={Register}></Route>
                  <PrivateRoute path="/">
                    <Dashboard />
                  </PrivateRoute>
                </Switch>
              </SocketProvider>
            </AuthProvider>
          </ChatProvider>
        </Router>
      </div>
    </Container>
  );
};
