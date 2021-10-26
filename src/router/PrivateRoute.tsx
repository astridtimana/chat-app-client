// import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({children, rest}:any) => {

  const { isAuthenticated } = useAuth();
  // console.log('priv-route', isAuthenticated);

  return (  
    <Route
      {...rest}
      render = { ({ location }) =>
        isAuthenticated 
        ? ( children ) 
        : (
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