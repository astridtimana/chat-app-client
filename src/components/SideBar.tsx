import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/users'
import { SidebarChatItem } from './SidebarChatItem'
// import socket from './Socket'


export const SideBar = () => {

  // const chats = [1,2,3,4,5,6,7,8,9,10]

  const [users, setUsers] = useState([])
  
  //---------------- RENDERIZANDO USUARIOS ------------------
  const getUsersChat = async() => {
    try {
      const storedToken:any = localStorage.getItem('token');
      const response:any = await getUsers(storedToken);
      setUsers(response);
    }
    catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getUsersChat();
  }, [])

  /*  useEffect(() => {
    socket.emit('connect');
  }, []) */

  return (
    <div className="inbox_chat">

    {
        users.map( (user:any) => (
            <SidebarChatItem key={user.id} user={user} />
        ))
    }


    {/* <!-- Espacio extra para scroll --> */}
    <div className="extra_space"></div>


</div>
  )
}
