import { useEffect, useCallback, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = () => {
    
  // const socket = useMemo(() => io( props.serverPath, {transports: ['websocket']} ), [ props.serverPath ] );
  const [ socket, setSocket ] = useState(null)  
  const [ online, setOnline ] = useState(false);

  const path = 'http://localhost:8080';


  // CONECTAR SOCKET
  const connectSocket = useCallback(() => { // conecta manualmente al usuario, para que no sea automático

    const token = localStorage.getItem('token');
    console.log(token);
    
    const tempSocket = io( path, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true, // se verá forzado a crear una conexión cuando esta fn se llame
      query: {'x-token':token}
    });
    setSocket(tempSocket);
  }, [])


  // DESCONECTAR SOCKET
  const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])


  // USE EFFECT PARA ALGO QUE AÚN NO ENTIENDO JEJE 
  useEffect(() => {
    setOnline( socket?.connection );
  }, [socket])


  // USE EFFECT PARA CONECTAR 
  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('linea 28 useSocket - entró')
        setOnline(true)
      });
    }
  }, [ socket ])


  // USE EFFECT PARA DESCONECTAR 
  useEffect(() => {
    if (socket) {
      socket.on('disconnect', () => {
        console.log('linea 32 useSocket - se fue')
        setOnline(false)
      });
    }
  }, [ socket ])


  return {
    socket,
    online,
    connectSocket,
    disconnectSocket
  }
}