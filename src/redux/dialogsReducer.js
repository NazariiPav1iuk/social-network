const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, user: 'Andrey'},
        {id: 2, user: 'Petro'},
        {id: 3, user: 'Stepa'},
        {id: 4, user: 'Serhii'},
        {id: 5, user: 'Tanya'},
        {id: 6, user: 'Mycola'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine and you?'},
    ],
    newMessageText: 'write your message'
}



const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:{
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: state.newMessageText}] 
            };
        }    

        case UPDATE_NEW_MESSAGE_TEXT:{ 
            return  {
                ...state,
                newMessageText: action.newText
            };
        }
            
        default:
            return state;
    }

}


export const sendMessageCreator = () =>  ({type: SEND_MESSAGE });
export const uppdateNewMessageTextCreator = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: messageText});

export default dialogsReducer;