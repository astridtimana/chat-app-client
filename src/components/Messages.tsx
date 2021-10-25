import React from 'react'
import { IncomingMsg } from './IncomingMsg'
import { OutgoingMsg } from './OutgoingMsg'
import { SendMsg } from './SendMsg'

export const Messages = () => {
  return (
    <div className="mesgs">
      <IncomingMsg />
      <OutgoingMsg />
      <SendMsg />
    </div>
  )
}
