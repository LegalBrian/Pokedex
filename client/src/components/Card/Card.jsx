import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, image, types, id }) => {
    return(
        <Link to={`/pokedex/${id}`} className={style.cardContainer}>
            <img className={style.cardImage} src={image} />
            <div className={style.cardDataContainer}>
                <p className={style.cardId}>{id}</p>
                <h3 className={style.cardName}>{name[0].toUpperCase() + name.slice(1)}</h3>
                {types.length === 2 ? (
                    <div className={style.cardTypesContainer}>
                    <h5 className={style.cardType} id={style[types[0]]}>{types[0][0].toUpperCase().concat(types[0].slice(1))}</h5>
                    <h5 className={style.cardType} id={style[types[1]]}>{types[1][0].toUpperCase().concat(types[1].slice(1))}</h5>
                </div>
                ) : (
                <div className={style.cardTypesContainer}>
                    <h5 className={style.cardType} id={style[types[0]]}>{types[0][0].toUpperCase().concat(types[0].slice(1))}</h5>
                </div>
                )}
            </div>
        </Link>
    )
}

export default Card;