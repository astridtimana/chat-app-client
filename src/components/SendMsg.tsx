import React, { useState, ChangeEvent, useContext } from 'react'
import { Form } from 'react-bootstrap'
import { SocketContext } from '../context/SocketContext';

export const SendMsg = () => {

  const [msg, setMsg] = useState('');
  //@ts-ignore
  const {socket} = useContext(SocketContext)

  const onChange =(e:ChangeEvent<any>)=>{
    setMsg(e.target.value);
  }

  const onSubmit=(e:ChangeEvent<any>)=>{
    e.preventDefault()

    if(msg.length=== 0) {return;}
    setMsg('')
    //TODO:Emitir un evento de sockets para enviar el mensaje
    // {
    //   de: //UID user que envia el msg
    //   para: //UID user que recibe msg
    //   mensaje: // lo que quiero enviar
    // }

    //TODO: Hacer el dispatch del mensaje
    socket.emit('mensaje-personal', {
      mensaje: msg
          //   de: //UID user que envia el msg
    //   para: //UID user que recibe msg
    //   mensaje: // lo que quiero enviar
    })
  }

  return (
    <form className="w-100" onSubmit={onSubmit}>
      <div className="row send-msg">
        <div className="col-sm-10">
          <Form.Control type ="text" placeholder="Mensaje" value={msg} onChange={onChange}/>
        </div>
        <div className="col-sm-2 d-flex align-self-center justify-content-center">
          <button className="msg_send_btn">
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}
