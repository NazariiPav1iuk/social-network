import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './DialogsItem/Message/Message'

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, user: 'Andrey'},
        {id: 2, user: 'Petro'},
        {id: 3, user: 'Stepa'},
        {id: 4, user: 'Serhii'},
        {id: 5, user: 'Tanya'},
        {id: 6, user: 'Mycola'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine and you?'},
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem user={d.user} id={d.id} />);

    let messagesElements = messages.map( m => <Message message={m.message} id={m.id} />);
       
    return(
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                   { dialogsElements }
                </div>
                <div className={s.messages}>
                   { messagesElements }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;