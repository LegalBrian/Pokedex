import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar"
import style from "./Detail.module.css"

const Detail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
    },[dispatch]);

    const myPokemon = useSelector((state) => state.detail)

    return (
        <div>
            {myPokemon.length > 0 ? 
            <div className={style.container}>
                <NavBar/>
                <div className={style.info} >

                    <div className={style.data}>
                        <h1 className={style.name}>Name: {myPokemon[0].name[0].toUpperCase().concat(myPokemon[0].name.slice(1))}</h1>
                        <h3 className={style.id}>Id: {myPokemon[0].id}</h3>
                        <img className={style.img} src={myPokemon[0].image}/>
                    </div>
                
                
                    <div className={style.data}>
                        <h3 className={style.typesContainer}>Types: {myPokemon[0].types.map(ele => <h3 className={style.types} id={style[ele]}>{ele[0].toUpperCase().concat(ele.slice(1))}</h3>)}</h3>
                        <h3 className={style.hp}>HP: {myPokemon[0].hp}</h3>
                        <h3 className={style.attack}>Attack: {myPokemon[0].attack}</h3>
                        <h3 className={style.defense}>Defense: {myPokemon[0].defense}</h3>
                        <h3 className={style.speed}>Speed: {myPokemon[0].speed}</h3>
                        <h3 className={style.height}>Height: {(myPokemon[0].height / 10).toFixed(1) + "m"}</h3>
                        <h3 className={style.weight}>Weight: {(myPokemon[0].weight / 10).toFixed(1) + "kg"}</h3>
                    </div>
                </div>
            </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default Detail;