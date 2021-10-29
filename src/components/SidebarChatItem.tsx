import { types } from "../types/types";
import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";

export const SidebarChatItem = (props: { user: any }) => {
  //@ts-ignore
  const { chatState, dispatch } = useContext(ChatContext);
  const {activeChat} = chatState;

  const onClick = () => {
    dispatch({
      type: types.activateChat,
      payload: props.user.id,
    });
  };
  return (
    <div onClick={onClick} className={`chat_list ${ (activeChat === props.user.id) && 'active_chat' }`}>
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{props.user.name}</h5>
          <span className="text-success">Online</span>
          <span className="text-danger">Offline</span>
        </div>
      </div>
    </div>
  );
};
