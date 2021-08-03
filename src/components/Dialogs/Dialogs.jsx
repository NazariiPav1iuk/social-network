import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './DialogsItem/Message/Message'

const Dialogs = (props) => {

    // add dialogs item on page
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogsItem user={d.user} key={d.id} id={d.id} />);
    // add messages on page
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id} id={m.id} />);
    // add new Message
    let newMessage = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.uppdateNewMessageText(messageText);
    }


    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogsElements }
                </div>
                <div className={s.messages}>
                   { messagesElements }

                    <div className={s.addMessageBlock} >
                        <textarea className={s.messageField} ref={newMessage} onChange={onMessageChange}  value={props.dialogsPage.newMessageText} rows="2" placeholder="Enter your message" />
                        <button className={s.button} onClick ={ sendMessage }>
                            send
                            <span></span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;