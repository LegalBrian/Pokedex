import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../redux/actions";
import Header from "../components/Header";
import Footer from "../components/Footer"
import validate from "./validate";
import style from "./Create.module.css";

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

    return(
        <div>
            <Header/>
            <form onSubmit={event => handleSubmit(event)} className="flex flex-col justify-center items-center p-10 gap-5">
                <h1 className="">Create Pokemon!</h1>
                <div className={style.createForm}>
                    <div className={style.createData}>

                        <div className={style.createField}>
                            <label className="pr-5">Name:</label>
                            <div className={style.createFieldInputAndError}>
                                <input className="w-[200px] h-[40px] border-[#278fff] rounded-md border-2 bg-normal placeholder:text-main-dark text-main-dark text-center" type="text" name="name" value={input.name} onChange={handleChange} placeholder="Add Name..."/>
                                {errors.name ? (<div className={style.errorContainer}><span className={style.errors}>{errors.name}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createTypeField}>
                            <label className="">Type(s):</label>
                            {errors.types ? (<div className={style.errorContainer}><span className={style.errors}>{errors.types}</span></div>) : <div className={style.errorContainer}></div>}
                            <div className={style.createTypesContainer}>
                                {types.map( type => (
                                <div className={style.createTypes}>
                                    <label className={style.createLabel}>
                                        <input className={style.createCheckbox} id="active" type="checkbox" value={type.name} onChange={(e) => handleChecked(e)}/>
                                        <span className={style.createSpan} id={style[type.name]} for="active"></span>
                                    </label>
                                </div>
                                ))}    
                            </div>
                        </div>

                    </div>
                    <div className={style.createData}>

                        <div className={style.createField}>
                            <label className={style.createLabel}>HP: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="hp" min={1} max={255} value={input.hp} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.hp ? input.hp : 0}</span>
                                {errors.hp ? (<div className={style.errorContainer}><span className={style.errors}>{errors.hp}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createField}>
                            <label className={style.createLabel}>Attack: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="attack" min={1} max={255} value={input.attack} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.attack ? input.attack : 0}</span>
                                {errors.attack ? (<div className={style.errorContainer}><span className={style.errors}>{errors.attack}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createField}>
                            <label className={style.createLabel}>Defense: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="defense" min={1} max={255} value={input.defense} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.defense ? input.defense : 0}</span>
                                {errors.defense ? (<div className={style.errorContainer}><span className={style.errors}>{errors.defense}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createField}>
                            <label className={style.createLabel}>Speed: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="speed" min={1} max={255} value={input.speed} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.speed ? input.speed : 0}</span>
                                {errors.speed ? (<div className={style.errorContainer}><span className={style.errors}>{errors.speed}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createField}>
                            <label className={style.createLabel}>Height: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="height" min={1} max={100} value={input.height} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.height ? ((input.height / 10).toFixed(1) + "m") : (0 + "m")}</span>
                                {errors.height ? (<div className={style.errorContainer}><span className={style.errors}>{errors.height}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                        <div className={style.createField}>
                            <label className={style.createLabel}>Weight: </label>
                            <div className={style.createFieldInputAndError}>
                                <input className={style.createInputRange} type="range" name="weight" min={1} max={1500} value={input.weight} onChange={handleChange}/>
                                <span className={style.createValorInput}>{input.weight ? ((input.weight/10).toFixed(1)) + "kg" : 0 + "kg"}</span>
                                {errors.weight ? (<div className={style.errorContainer}><span className={style.errors}>{errors.weight}</span></div>) : <div className={style.errorContainer}></div>}
                            </div>
                        </div>

                    </div>
                </div>    
                <button className="h-[40px] w-[150px] rounded-xl cursor-pointer flex items-center justify-center text-base text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-0 hover:text-main-light hover:bg-[#007aff] transition duration-500" type="submit">Create Pokemon</button>
            </form>
            <Footer/>
        </div>
    )
}

export default PokemonCreate;