/* import { useEffect, useCallback, useState } from 'react';
import io from 'socket.io-client';
 */

export const useSocket = ( { serverPath }: any ) => {
    
  // const socket = useMemo(() => io( props.serverPath, {transports: ['websocket']} ), [ props.serverPath ] );
  /* const [ socket, setSocket ] = useState(null)  
  const [ online, setOnline ] = useState(false); */


  /* const connectSocket = useCallback(() => {
    // conecta manualmente al usuario, para que no sea automático
    const temporarySocket = io( serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true // se verá forzado a crear una conexión cuando esta fn se llame
    });
    setSocket(temporarySocket);
  }, [serverPath]) */


  /* const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])


  useEffect(() => {
    setOnline( socket?.connected );
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline( true ));
  }, [ socket ])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline( false ));
  }, [ socket ])
 */

  return {
    /* socket,
    online,
    connectSocket,
    disconnectSocket */
  }
}