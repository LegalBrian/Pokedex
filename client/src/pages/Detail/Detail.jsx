import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
                <Header/>
                <div className={style.info} >

                    <div className={style.detailDataContainer}>
                        <p className={style.detailData}>Name: {myPokemon[0].name[0].toUpperCase().concat(myPokemon[0].name.slice(1))}</p>
                        <p className={style.detailData}>Id: {myPokemon[0].id}</p>
                        <img className={style.detailImage} src={myPokemon[0].image}/>
                    </div>
                
                
                    <div className={style.detailDataContainer}>
                        <p className={style.detailDataTypes}>Type(s): {myPokemon[0].types.map(ele => <p className={style.types} id={style[ele]}>{ele[0].toUpperCase().concat(ele.slice(1))}</p>)}</p>
                        <p className={style.detailData}>HP: {myPokemon[0].hp}</p>
                        <p className={style.detailData}>Attack: {myPokemon[0].attack}</p>
                        <p className={style.detailData}>Defense: {myPokemon[0].defense}</p>
                        <p className={style.detailData}>Speed: {myPokemon[0].speed}</p>
                        <p className={style.detailData}>Height: {(myPokemon[0].height / 10).toFixed(1) + "m"}</p>
                        <p className={style.detailData}>Weight: {(myPokemon[0].weight / 10).toFixed(1) + "kg"}</p>
                    </div>
                </div>
                <Footer/>
            </div> : 
            <div>
                <p>Loading...</p>
            </div>
            }
        </div>
    )
}

export default Detail;