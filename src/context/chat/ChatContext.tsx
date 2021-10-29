import React, { createContext, useReducer } from "react";
import { ChatReducer } from "./chatReducer";

export const ChatContext = createContext({});

const initialState: any = {
  uid: "",
  activeChat: null,
  users: [],
  messages: [],
};

export const ChatProvider = ({ children }: any) => {

    const [chatState, dispatch] = useReducer(ChatReducer, initialState)

  return (
    <ChatContext.Provider value={{ chatState, dispatch}}>
      {children}
    </ChatContext.Provider>
  );
};
