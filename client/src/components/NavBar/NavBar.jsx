import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/logo.png"
import style from './NavBar.module.css';


const NavBar = () => { 
    return (
        <nav className={style.container}>
            <Link to='/'>
                <img id="logoPoke" src={image} className={style.logo}/>
            </Link>
            <Link to="/pokedex"><button className={style.homeButton}>Home</button></Link>
            <Link to="/create"><button className={style.createButton}>Create</button></Link>
        </nav>
    );
}
export default NavBar