import style from "./Sort.module.css"

const Sort = ({ allTypes, handlerClick, handleFilterType, handleFilterCreated, handleOrderedByName, handleOrderedByAttack, handleOrderedById }) => {

    return(
        <div className={style.filters}>
            <button className={style.restore} onClick={e=>{handlerClick(e)}}>Restore</button>
            <select  className={style.select} onChange={e => handleOrderedById(e)}>
                <option disabled selected>Id</option>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>
            </select>
            <select  className={style.select} onChange={e => handleOrderedByName(e)}>
                <option disabled selected>Name</option>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>
            </select>
            <select  className={style.select} onChange={e => handleOrderedByAttack(e)}>
                <option disabled selected>Attack</option>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>
            </select>
            <select  className={style.select} onChange={e => handleFilterType(e)}>
                <option disabled selected>Type</option>
                <option value="all">All</option>
                {allTypes?.map((ele) => (
                <option value={ele.name}>{ele.name[0].toUpperCase()+ele.name.slice(1)}</option>
                ))}
            </select>
            <select  className={style.select} onChange={e => handleFilterCreated(e)}>
                <option disabled selected>Source</option>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
            </select>
        </div>
    )
}

export default Sort;