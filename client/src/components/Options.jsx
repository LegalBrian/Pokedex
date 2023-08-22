import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../redux/actions/index";

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
        <form className="flex flex-row justify-between items-center w-full" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-row gap-2">
                <input className="w-[200px] h-[40px] border-[#278fff] rounded-md border-2 bg-normal placeholder:text-main-dark text-main-dark text-center" type="text" placeholder="Search Pokemon..." value = {name} onChange={(e) => handleInputChange(e)}/>
                <button onClick={(e) => handleSubmit(e)} className="h-[40px] w-[60px] rounded-xl cursor-pointer flex items-center justify-center text-base text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-0 hover:text-main-light hover:bg-[#007aff] transition duration-500">Search</button>
            </div>
            <select className="w-[200px] h-[40px] border-[#278fff] rounded-md border-2 bg-normal placeholder:text-main-dark text-main-dark text-center" onChange={e => handleOrdered(e)}>
                <option disabled selected className="">Order by...</option>
                <option value="ascendantId" className="">Id ↑</option>
                <option value="descendantId" className="">Id ↓</option>
                <option value="ascendantName" className="">Name ↑</option>
                <option value="descendantName" className="">Name ↓</option>
            </select>
            <select  className="w-[200px] h-[40px] border-[#278fff] rounded-md border-2 bg-normal placeholder:text-main-dark text-main-dark text-center" onChange={e => handleFilterType(e)}>
                <option disabled selected className="">Filter by Type...</option>
                <option value="all" className="">All</option>
                {allTypes?.map((ele) => (
                    <option value={ele.name} className="">{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                ))}
            </select>
            <select  className="w-[200px] h-[40px] border-[#278fff] rounded-md border-2 bg-normal placeholder:text-main-dark text-main-dark text-center" onChange={e => handleFilterCreated(e)}>
                <option disabled selected className="">Filter by Source...</option>
                <option value="all" className="">All</option>
                <option value="created" className="">Created</option>
                <option value="existing" className="">Existing</option>
            </select>
            <button className="h-[40px] w-[70px] rounded-xl cursor-pointer flex items-center justify-center text-base text-[#ff0000] font-code font-medium border-2 border-solid border-[#ff0000] outline-none px-2 py-0 hover:text-main-light hover:bg-[#ff0000] transition duration-500" onClick={e=>{handlerClick(e)}}>Restore</button>
        </form>
    )
}

export default Options;