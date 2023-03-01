import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterPokemonsByType, filterCreated, orderBy } from "../../redux/actions/index";
import Header from "../../components/Header/Header";
import Options from "../../components/Options/Options";
import Paginated from "../../components/Paginated/Paginated";
import Card from "../../components/Card/Card";
import style from "./Home.module.css"
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types)

    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes())
    },[dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlerClick = (event) => {
        event.preventDefault();
        dispatch(getPokemons());
        paginated(1)
    }

    const handleFilterType = (event) => {
        event.preventDefault()
        paginated(1)
        dispatch(filterPokemonsByType(event.target.value));
    }

    const handleFilterCreated = (event) =>{
        event.preventDefault()
        paginated(1)
        dispatch(filterCreated(event.target.value));
    }

    const [order, setOrder] = useState("");
    const handleOrdered = (event) => {
        event.preventDefault();
        paginated(1)
        dispatch(orderBy(event.target.value));
        setOrder(`Ordenado ${event.target.value}`)
    }
    
    return(
        <div>
            <Header/>
            <div className={style.homeContainer}>
                <div className={style.homeOptions}>
                    <Options paginated={paginated} allTypes={allTypes} handlerClick={handlerClick} handleFilterType={handleFilterType} handleFilterCreated={handleFilterCreated} handleOrdered={handleOrdered}/>
                </div>
                <div className={style.homeView}>    
                    <Paginated currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
                    <div className={style.homeCardContainer}>
                    {currentPokemons?.map(ele => {
                        return(
                            <Card name={ele.name} image={ele.image} types={ele.types} id={ele.id}/>
                    )})}
                    </div>
                    <Paginated currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;