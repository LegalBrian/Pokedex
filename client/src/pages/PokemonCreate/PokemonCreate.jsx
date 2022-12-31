import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar"
import validate from "./validate";
import image from "../../images/Create.gif"
import style from "./PokemonCreate.module.css";

const PokemonCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.allPokemons.map( pok => pok.name))

    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: 0, 
        attack: 0 , 
        defense: 0, 
        speed: 0, 
        height: 0, 
        weight: 0,
        types: []
    });
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        dispatch(getTypes());
    },[dispatch]);

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
        setErrors(validate({...input, [e.target.name] : e.target.value}, pokemons))
    }
    
    function handleChecked(e){
        if (e.target.checked) {
            setInput({...input, types: [...input.types , e.target.value]})
            setErrors(validate({...input, types: [...input.types , e.target.value]}, pokemons))   
        } else if (!e.target.checked) {
            setInput({...input, types: input.types.filter(el => el !== e.target.value)})
            setErrors(validate({...input, types: input.types.filter(el => el !== e.target.value)}, pokemons))    
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0 && input.name.length){
            dispatch(postPokemon(input));
            setInput({
                name: '',
                hp: '',
                attack: 0,
                defense: 0,
                speed: 0,
                weight: 0,
                height: 0,
                types: [],
            })
            alert("Pokemon created successfuly!");
            history.push("/pokedex")
        } else{
            alert("Correct the error to create the Pokemon");
        }
    }
    
    const handlerImageDefault = (event) => {
        event.preventDefault()
        setInput({...input, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"},pokemons)
    }

    return(
        <div className={style.container}>
            <NavBar/>
            <h1 className={style.title}>Create Pokemon!</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <div className={style.data}>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Name: </label>
                            <input className={style.inputName} type="text" name="name" value={input.name} onChange={handleChange} placeholder="Add Name"/>
                        </div>
                        {errors.name ? (<div className={style.errorContainer}><span className={style.errors}>{errors.name}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Image: </label>
                            <input className={style.inputImage} type="text" name="image" value={input.image}  onChange={handleChange} placeholder="Add Image URL"/>
                            <button className={style.buttonImage} onClick={handlerImageDefault}>Image Default</button>
                        </div>
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>HP: </label>
                            <input className={style.input} type="range" name="hp" min={1} max={255} value={input.hp} onChange={handleChange}/>
                            <span>{input.hp ? input.hp : 0}</span>
                        </div>
                        {errors.hp ? (<div className={style.errorContainer}><span className={style.errors}>{errors.hp}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Attack: </label>
                            <input className={style.input} type="range" name="attack" min={1} max={255} value={input.attack} onChange={handleChange}/>
                            <span>{input.attack ? input.attack : 0}</span>
                        </div>
                        {errors.attack ? (<div className={style.errorContainer}><span className={style.errors}>{errors.attack}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Defense: </label>
                            <input className={style.input} type="range" name="defense" min={1} max={255} value={input.defense} onChange={handleChange}/>
                            <span>{input.defense ? input.defense : 0}</span>
                        </div>
                        {errors.defense ? (<div className={style.errorContainer}><span className={style.errors}>{errors.defense}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Speed: </label>
                            <input className={style.input} type="range" name="speed" min={1} max={255} value={input.speed} onChange={handleChange}/>
                            <span>{input.speed ? input.speed : 0}</span>
                        </div>
                        {errors.speed ? (<div className={style.errorContainer}><span className={style.errors}>{errors.speed}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Height: </label>
                            <input className={style.input} type="range" name="height" min={1} max={100} value={input.height} onChange={handleChange}/>
                            <span>{input.height ? ((input.height / 10).toFixed(1) + "m") : (0 + "m")}</span>
                        </div>
                        {errors.height ? (<div className={style.errorContainer}><span className={style.errors}>{errors.height}</span></div>) : <i></i>}
                    </div>
                    <div className={style.fieldContainer}>
                        <div className={style.field}>
                            <label>Weight: </label>
                            <input className={style.input} type="range" name="weight" min={1} max={1500} value={input.weight} onChange={handleChange}/>
                            <span>{input.weight ? ((input.weight/10).toFixed(1)) + "kg" : 0 + "kg"}</span>
                        </div>
                        {errors.weight ? (<div className={style.errorContainer}><span className={style.errors}>{errors.weight}</span></div>) : <i></i>}
                    </div>
                </div>
                <div className={style.typesContainer}>
                    <label>Type(s): </label> 
                    <div> 
                        {types.map( type => (
                            <div className={style.types}>
                                <label className={style.label}>
                                <input className={style.checkbox} id="active"type="checkbox" value={type.name} onChange={(e) => handleChecked(e)}/>
                                <span className={style.span} id={style[type.name]} for="active"></span>
                                </label>
                            </div>
                        ))}    
                    </div>
                    {errors.types ? (<div><span className={style.errorType}>{errors.types}</span></div>) :<i></i>}  
                </div>
                <div className={style.buttonContainer}>
                    <img className={style.image} src={image}/>
                    <button className={style.submitButton} type="submit">Create Pokemon</button> 
                </div>
            </form> 
        </div>
    )
}

export default PokemonCreate;