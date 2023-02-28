import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoB from "../../images/logo-blanco.png";
import style from './Header.module.css';

const Header = () => { 

    // const [menuOpen, setMenuOpen] = useState(false);
    
    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    // useEffect(() => {
    //     if (menuOpen) {
    //         document.body.style.overflow = ;
    //     } else {
    //         document.body.style.overflow = ;
    //     }
    // }, [menuOpen]);

    return (
        <header className={style.headerContainer}>
            <Link to='/'>
                <a>
                    <img src={logoB} className={style.headerLogo} alt="Logo" />
                </a>
            </Link>
            {/* <button className={style.headerButtonMenu}>
                <span className="sr-only">Menú</span>
                <svg className={style.headerButtonMenuSvg} viewBox="0 0 24 24">
                    <rect x="4" y="5" width="16" height="2" />
                    <rect x="4" y="11" width="16" height="2" />
                    <rect x="4" y="17" width="16" height="2" />
                </svg>
            </button> */}
            <nav className={style.headerNav}>
                <Link className={style.headerNavOptionLink} to="/pokedex"><a className={style.headerNavOption}>HOME</a></Link>
                <Link className={style.headerNavOptionLink} to="/create"><a className={style.headerNavOption}>CREATE</a></Link>
                <Link className={style.headerNavOptionLink} to="/"><a className={style.headerNavOption}>ABOUT</a></Link>
            </nav>
        </header>
    );
}
export default Header;