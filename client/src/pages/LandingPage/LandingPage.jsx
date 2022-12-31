import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
    return(
        <div className={style.container}>
            <h1 className={style.welcome}>Welcome to the Pokedex</h1>
            <Link to="/pokedex">
                <button className={style.enterButton}>Enter</button>
            </Link>
        </div>
    )
}

export default LandingPage;