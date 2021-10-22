import React from 'react'
import { Form } from 'react-bootstrap'

export const SendMsg = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm-9">
          <Form.Control type ="text" placeholder="Mensaje"/>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-purple">
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}
