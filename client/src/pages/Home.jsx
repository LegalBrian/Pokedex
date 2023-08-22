import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterPokemonsByType, filterCreated, orderBy } from "../redux/actions/index";
import Header from "../components/Header";
import Options from "../components/Options";
import Paginated from "../components/Paginated";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

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
        <>
            <Header/>
            <div className="flex flex-col m-5">
                <div className="flex flex-col items-center gap-5">    
                    <Options paginated={paginated} allTypes={allTypes} handlerClick={handlerClick} handleFilterType={handleFilterType} handleFilterCreated={handleFilterCreated} handleOrdered={handleOrdered}/>
                    <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 lg:grid-cols-3">
                    {currentPokemons?.map(ele => {
                        return(
                            <Card name={ele.name} image={ele.image} types={ele.types} id={ele.id}/>
                    )})}
                    </div>
                <Paginated currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} allPokemons={allPokemons.length} paginated={paginated} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;