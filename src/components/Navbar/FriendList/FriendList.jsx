import React from 'react'
import Friend from './Friend/Friend'
import s from './FriendList.module.css'

const FriendList = (props) => {

    let FriendElements = props.friends.map( f => <Friend user={f.user} key={f.id} icon={f.icon}/>)
    return(
        <div className={s.wrapper}>
            <h2 className={s.tittle}>Friends</h2>
            <div className={s.row}>
                {FriendElements}
            </div>
        </div>
    )
}


export default FriendList;