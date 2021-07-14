import React from 'react'
import s from './Message.module.css'

const Message = (props) => {

    return(
        <div className={s.messageBox}>
            <img className={s.avatar} src='https://image.flaticon.com/icons/png/512/147/147144.png' />
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;