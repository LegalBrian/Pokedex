import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, types, id }) => {
    return(
        <Link to={`/pokedex/${id}`}>
            <div className={`skew-x-12 border-2 border-solid border-${types[0]} bg-${types[0]} bg-opacity-10 px-6 py-1.5 mx-3.5 my-2 hover:scale-110 transition-all`}>
				<div className="-skew-x-12 flex flex-col items-center">
					<p className="text-base text-main-dark font-code font-normal">#{id}</p>
					<img src={image} width="100" height="100"/>
					<p className="text-main-dark text-xl font-code font-normal text-center capitalize whitespace-nowrap overflow-hidden w-2/4">
						{name}
					</p>

                    {types.length === 2 ? (
                    <div className="flex justify-between items-center">
                        <div className={`w-[70px] skew-x-32 text-main-dark font-code text-center bg-${types[0]}`}>
                            <p className="-skew-x-32">{types[0][0].toUpperCase().concat(types[0].slice(1))}</p>
                        </div>
                        <div className={`w-[70px] skew-x-32 text-main-dark font-code text-center bg-${types[1]}`}>
                            <p className="-skew-x-32">{types[1][0].toUpperCase().concat(types[1].slice(1))}</p>
                        </div>
                    </div>
                    ) : (
                    <div className="flex justify-between items-center">
                        <div className={`w-[70px] skew-x-32 text-main-dark font-code  text-center bg-${types[0]}`}>
                            <p className="-skew-x-32">{types[0][0].toUpperCase().concat(types[0].slice(1))}</p>
                        </div>
                    </div>
                    )}
                </div>
			</div>
        </Link>
    )
}

export default Card;