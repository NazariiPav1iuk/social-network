import React from 'react'
import s from './Navbar.module.css'
import FriendList from './FriendList/FriendList'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <NavLink className={s.item} to='/profile' activeClassName={s.active}>Profile</NavLink>
                <NavLink className={s.item} to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                <NavLink className={s.item} to='/users' activeClassName={s.active}>Users</NavLink>
                <NavLink className={s.item} to='/news' activeClassName={s.active}>News</NavLink>
                <NavLink className={s.item} to='/music' activeClassName={s.active}>Music</NavLink>
                <NavLink className={s.item} to='/set' activeClassName={s.active}>Settings</NavLink>
            </nav>
            <FriendList friends={props.sidebar.friendList} />
        </div>
        
    )
}

export default Navbar;