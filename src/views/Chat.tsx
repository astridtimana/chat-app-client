import React from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';

import '../styles/chat.css';

export default function Dashboard() {


  return (
    <div className="messaging">
      <div className="inbox_msg">

        <InboxPeople />

        {
          (!true)
            ? <Messages />
            : <ChatSelect />
        }


      </div>


    </div>
  )
}