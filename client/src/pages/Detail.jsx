import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../redux/actions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Detail = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetails(props.match.params.id));
    },[dispatch]);

    const myPokemon = useSelector((state) => state.detail)

    return (
        <div>
            {myPokemon.length > 0 ? 
            <div className="">
                <Header/>
                <div className="flex flex-col justify-center items-center my-[20px]">
                    <Link
						to={`/pokedex`}
						className="flex self-start ml-5 w-[50px] h-[50px] items-center justify-center text-lg text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-1 hover:text-main-light hover:bg-[#007aff] transition-all"
					>
						<BiArrowBack />
					</Link>
                    <div className={`flex flex-col items-center gap-1 bg-${myPokemon[0].types[0]} bg-opacity-10 border-2 border-solid border-${myPokemon[0].types[0]} w-2/4`}>

                        <div className="flex flex-row w-full justify-around m-4">
                            <p className="text-2xl font-mono">{myPokemon[0].name[0].toUpperCase().concat(myPokemon[0].name.slice(1))}</p>
                            <p className="text-xl">#{myPokemon[0].id}</p>
                        </div>
                    
                        <img className="w-full sm:w-2/4 h-auto m-auto" src={myPokemon[0].image}/>
                    
                        <div className="flex flex-col items-center gap-5">
                            <p className="flex flex-row">
                                {myPokemon[0].types.map(ele => <p className={`w-[70px] text-main-dark font-code text-center bg-${ele}`}>{ele[0].toUpperCase().concat(ele.slice(1))}</p>)}
                            </p>
                            <div className="grid grid-cols-2 gap-x-[150px] gap-y-[15px] m-[20px]">
                                <p>HP: {myPokemon[0].hp}</p>
                                <p>Attack: {myPokemon[0].attack}</p>
                                <p>Defense: {myPokemon[0].defense}</p>
                                <p>Speed: {myPokemon[0].speed}</p>
                                <p>Height: {(myPokemon[0].height / 10).toFixed(1) + "m"}</p>
                                <p>Weight: {(myPokemon[0].weight / 10).toFixed(1) + "kg"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div> : 
            <div>
                <Loading/>
            </div>
            }
        </div>
    )
}

export default Detail;