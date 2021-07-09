import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <NavLink className={s.item} to='/profile' activeClassName={s.active}>Profile</NavLink>
            <NavLink className={s.item} to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            <NavLink className={s.item} to='/news' activeClassName={s.active}>News</NavLink>
            <NavLink className={s.item} to='/music' activeClassName={s.active}>Music</NavLink>
            <NavLink className={s.item} to='/set' activeClassName={s.active}>Settings</NavLink>
        </nav>
    )
}

export default Navbar;