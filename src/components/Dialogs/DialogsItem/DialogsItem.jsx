import React from 'react'
import s from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'



const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;
    
    return(
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                {props.user}
            </NavLink>    
        </div>
    )
}

export default DialogsItem;