import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postLogin/* , getCurrentUser */} from '../services/auth';
import {postUser} from '../services/users';

interface authContextType {
  isAuthenticated: boolean;
  register:(p:object) => void;
  login:(p:object) => void;
  logout:() => void;
}

export const AuthContext = React.createContext({})

export const useAuth = () => React.useContext(AuthContext) as authContextType;

export const AuthProvider = ({ children }:any) => {

  let history = useHistory();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para setear la autenticación mediante un callback
  const setAuthFn = (cb:any) => cb
    .then(() => {
      setIsAuthenticated(true);
    })
    .catch((err: any) => {
      console.log(err)
      setIsAuthenticated(false)
    })

  const register = (data:object) => setAuthFn(postUser(data))
  
  const login = (data:object) => setAuthFn(postLogin(data))

  const logout = () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setIsAuthenticated(false)
  }

  const checkAuth = () => {
    if (document.cookie && !isAuthenticated) {
      // si existe cookie y si no está autenticado, entonces setea la autenticación
      // sino, da igual :p
      setIsAuthenticated(true)
    }
  }

  // Esto nos ayuda para los métodos de login y register (autenticación)
  useEffect(() => {
    if (isAuthenticated === true) {
      history.push('/')
    }
  }, [history, isAuthenticated])
  
  // Que se cumpla la función de chequeo de autenticación y cookies
  // Igual preguntar otra vez para que nos quede más claro esta función fuera
  checkAuth();

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout , register}} >
      { children }
    </ AuthContext.Provider>
  )
}