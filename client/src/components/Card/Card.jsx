import React from "react";
import style from "./Card.module.css";


const Card = ({name, image, types}) => {
    return(
        <div className={style.container}>
            <figure className={style.card}>
                <h3 className={style.cardName}>{name[0].toUpperCase() + name.slice(1)}</h3>
                <img className={style.pokemonImg} src={image} />
                {types.length === 2 ? (
                <div className={style.types}>
                    <h5 className={style.cardType} id={style[types[0]]}>{types[0][0].toUpperCase().concat(types[0].slice(1))}</h5>
                    <h5 className={style.cardType} id={style[types[1]]}>{types[1][0].toUpperCase().concat(types[1].slice(1))}</h5>
                </div>
                ) : (
                <div className={style.types}>
                    <h5 className={style.cardType} id={style[types[0]]}>{types[0][0].toUpperCase().concat(types[0].slice(1))}</h5>
                </div>
                )}
            </figure>
        </div>
    )
}

export default Card;