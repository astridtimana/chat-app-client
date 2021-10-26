import React from 'react'
import { Form } from 'react-bootstrap'

export const SendMsg = () => {
  return (
    <form className="w-100">
      <div className="row send-msg">
        <div className="col-sm-10">
          <Form.Control type ="text" placeholder="Mensaje"/>
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
