import { types } from "../../types/types";


export const ChatReducer = (state:any,action:any) => {

    switch (action.type) {
            
        case types.activateChat:
            if(state.activeChat === action.payload) return state;
            return {
                ...state,
                activeChat: action.payload ,
                messages: []
            }
        default:
            return state;
    }
}
