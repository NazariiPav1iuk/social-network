import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './DialogsItem/Message/Message'

const Dialogs = (props) => {
    // add dialogs item on page
    let dialogsElements = props.state.dialogs.map( d => <DialogsItem user={d.user} id={d.id} />);
    // add messages on page
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} />);

    // add new Message
    let newMessage = React.createRef();

    let sendMessage = () => {
        //take text from textarea 
        let textMessage = newMessage.current.value;
        props.sendMessage(textMessage);
        newMessage.current.value = '';
    }

    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogsElements }
                </div>
                <div className={s.messages}>
                   { messagesElements }

                    <div>
                        <textarea ref={ newMessage } cols="30" rows="10"></textarea>
                        <button onClick ={ sendMessage }>send message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;