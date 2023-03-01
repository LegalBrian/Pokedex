import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../../redux/actions/index";
import optiondIcon from "../../images/optionsIcon.png"
import style from "./Options.module.css";

const Options = ({ paginated, allTypes, handlerClick, handleFilterType, handleFilterCreated, handleOrdered }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name !== ''){
            dispatch(getNamePokemon(name))
            setName("")
            paginated(1)
        }
    }

    return (
        <form className={style.optionsContainer} onSubmit={(e) => handleSubmit(e)}>
            <img src={optiondIcon} className={style.optionsIcon} />
            <div className={style.optionsSearchBar}>
                <input className={style.optionsSearchBarInput} type="text" placeholder="Search Pokemon..." value = {name} onChange={(e) => handleInputChange(e)}/>
                <button onClick={(e) => handleSubmit(e)} className={style.optionsButton}>Search</button>
            </div>
            <p  className={style.optionsFiltersSubtitle}>Order by:</p>
            <div className={style.optionsFilters}>
                <select  className={style.optionsFiltersSelect} onChange={e => handleOrdered(e)}>
                    <option disabled selected className={style.optionsFiltersSelectOption}>Select...</option>
                    <option value="ascendantId" className={style.optionsFiltersSelectOption}>Id - Ascendant</option>
                    <option value="descendantId" className={style.optionsFiltersSelectOption}>Id - Descendant</option>
                    <option value="ascendantName" className={style.optionsFiltersSelectOption}>Name - Ascendant</option>
                    <option value="descendantName" className={style.optionsFiltersSelectOption}>Name - Descendant</option>
                    <option value="ascendantAttack" className={style.optionsFiltersSelectOption}>Attack - Ascendant</option>
                    <option value="descendantAttack" className={style.optionsFiltersSelectOption}>Attack - Descendant</option>
                </select>
            </div>
            <p className={style.optionsFiltersSubtitle}>Filter by:</p>
            <div className={style.optionsFilters}>
                <select  className={style.optionsFiltersSelect} onChange={e => handleFilterType(e)}>
                    <option disabled selected className={style.optionsFiltersSelectOption}>Type</option>
                    <option value="all" className={style.optionsFiltersSelectOption}>All</option>
                    {allTypes?.map((ele) => (
                        <option value={ele.name} className={style.optionsFiltersSelectOption}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                    ))}
                </select>
                <select  className={style.optionsFiltersSelect} onChange={e => handleFilterCreated(e)}>
                    <option disabled selected className={style.optionsFiltersSelectOption}>Source</option>
                    <option value="all" className={style.optionsFiltersSelectOption}>All</option>
                    <option value="created" className={style.optionsFiltersSelectOption}>Created</option>
                    <option value="existing" className={style.optionsFiltersSelectOption}>Existing</option>
                </select>
                <button className={style.optionsButton} onClick={e=>{handlerClick(e)}}>Restore</button>
            </div>
        </form>
    )
}

export default Options;