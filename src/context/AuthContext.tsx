import React, { useState } from 'react';
import { postLogin} from '../services/auth';
import {postUser} from '../services/users';

interface authContextType {
    isAuthenticated: boolean;
    register:(p:object) => void;
    login:(p:object) => void;
    logout:() => void;
}

export const AuthContext = React.createContext({})

export const useAuth = ()=> React.useContext(AuthContext) as authContextType;

export const AuthProvider = ({ children }:any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const register = (data:object) => postUser(data)
        .then(() => {
            setIsAuthenticated(true);
        })
        .catch((err: any) => {
            console.log(err)
            setIsAuthenticated(false)
        })


    const login = (data:object) => postLogin(data)
        .then(() => {
            setIsAuthenticated(true);
        })
        .catch((err: any) => {
            console.log(err)
            setIsAuthenticated(false)
        })

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout , register}} >
            { children }
        </ AuthContext.Provider>
    )
}