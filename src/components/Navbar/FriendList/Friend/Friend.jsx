import React from 'react'
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.user}>
            <img className={s.userIcon} src={props.icon}/>
            <a className={s.userName}>{props.user}</a>
        </div>
    )
}

export default Friend;