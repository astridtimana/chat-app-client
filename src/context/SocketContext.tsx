import React, { createContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { useAuth } from './AuthContext';

export const SocketContext = createContext({});


export const SocketProvider = ({ children }: any) => {

  const { socket, online, connectSocket, disconnectSocket } = useSocket();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      connectSocket();
    }
  }, [connectSocket, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      disconnectSocket();
    }
  }, [disconnectSocket, isAuthenticated]);


  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children }
    </SocketContext.Provider>
  )
}