import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoB from "../../images/logo-blanco.png";
import style from './Header.module.css';

const Header = () => { 
    return (
        <header className={style.headerContainer}>
            <Link to='/'>
                <a>
                    <img src={logoB} className={style.headerLogo} alt="Logo" />
                </a>
            </Link>
            <nav className={style.headerNav}>
                <Link className={style.headerNavOptionLink} to="/pokedex"><a className={style.headerNavOption}>HOME</a></Link>
                <Link className={style.headerNavOptionLink} to="/create"><a className={style.headerNavOption}>CREATE</a></Link>
                <a href="https://legalbrian.vercel.app" target="_blank" className={style.headerNavOption}>ABOUT</a>
            </nav>
        </header>
    );
}
export default Header;