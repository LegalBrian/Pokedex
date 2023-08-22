import React from "react";
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Paginated = ({currentPage, pokemonsPerPage, allPokemons, paginated}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    const prevPage = () => {
        if(currentPage !== 1){
            paginated(currentPage-1)
        }
    }
    const nextPage = () => {
        const lastPage = Math.ceil(allPokemons / pokemonsPerPage)
        if(currentPage !== lastPage){
            paginated(currentPage+1)
        }
    }
    return(
        <nav className="flex flex-row gap-[4px]">
            <BiChevronLeft className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center text-base text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-0 hover:text-main-light hover:bg-[#007aff] transition-all" onClick={prevPage}/>
            {pageNumbers?.map(number => (
                <button className={currentPage === number ? "w-[40px] h-[40px] cursor-pointer flex items-center justify-center text-bas font-code font-medium border-2 border-solid border-main-light outline-none px-2 py-0 text-main-light bg-[#007aff] transition-all" : "w-[40px] h-[40px] cursor-pointer flex items-center justify-center text-base text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-0 hover:text-main-light hover:bg-[#007aff] transition-all"} onClick={()=> paginated(number)}>{number}</button>
            ))}
            <BiChevronRight className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center text-base text-[#007aff] font-code font-medium border-2 border-solid border-[#007aff] outline-none px-2 py-0 hover:text-main-light hover:bg-[#007aff] transition-all"onClick={nextPage} />
        </nav>
    )
}
    

export default Paginated;