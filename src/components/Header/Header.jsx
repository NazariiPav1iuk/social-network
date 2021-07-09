import React from 'react'
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src='https://img.icons8.com/plasticine/2x/duolingo-logo.png' />
            <a className={s.logoName}>Bird_Book</a>
        </header>
    )
}

export default Header;