import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, getTypes, filterPokemonsByType, filterCreated, orderByName, orderByAttack, orderById } from "../../redux/actions/index";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sort from "../../components/Sort/Sort";
import Paginated from "../../components/Paginated/Paginated";
import Card from "../../components/Card/Card";
import style from "./Home.module.css"

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

    const [ordenByName, setOrdenByName] = useState("");
    const handleOrderedByName = (event) => {
        event.preventDefault();
        paginated(1)
        dispatch(orderByName(event.target.value));
        setOrdenByName(`Ordenado ${event.target.value}`)
    }

    const [ordenByAttack, setOrdenByAttack] = useState("");
    const handleOrderedByAttack = (event) => {
        event.preventDefault();
        paginated(1)
        dispatch(orderByAttack(event.target.value));
        setOrdenByAttack(`Ordenado ${event.target.value}`)
    }

    const [ordenById, setOrdenById] = useState("");
    const handleOrderedById = (event) => {
        event.preventDefault();
        paginated(1)
        dispatch(orderById(event.target.value));
        setOrdenById(`Ordenado ${event.target.value}`)
    }
    
    return(
        <div>
            <NavBar></NavBar>
            <div className={style.container}>
                <SearchBar paginated={paginated}/>
                <Sort allTypes={allTypes} handlerClick={handlerClick} handleFilterType={handleFilterType} handleFilterCreated={handleFilterCreated} handleOrderedByName={handleOrderedByName} handleOrderedByAttack={handleOrderedByAttack} handleOrderedById={handleOrderedById} />
                <Paginated currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
                <div>
                {currentPokemons?.map(ele => {
                    return(
                        <div>
                            <Link to={`/pokedex/${ele.id}`}>
                            <Card name={ele.name} image={ele.image} types={ele.types}/>
                            </Link>
                        </div>
                )})}
                </div>
                <Paginated currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
            </div>
        </div>
    )
}

export default Home;