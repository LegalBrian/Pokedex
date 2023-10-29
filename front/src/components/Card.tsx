import React from 'react';

interface CardProps {
    p: {
        id: number;
        name: string;
        image: string;
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        height: number;
        weight: number;
        specialAttack: number;
        specialDefense: number;
        types: string[];
    }
}

const Card: React.FC<CardProps> = ({p}) => {
    return (
        <button className={`bg-${p.types[0]} w-fit h-fit p-4 flex flex-col items-center justify-center rounded-xl bg-opacity-20 border border-${p.types[0]} duration-300 hover:bg-opacity-60`}>
            <div className={`relative w-12 h-12 text-red-500 self-start`}>
                <svg className={`w-12 h-12`} viewBox="0 0 24 24" fill="none">
                    <g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"></path></g>
                </svg>
                <p className="absolute top-[50%] left-[50%] text-white font-bold" style={{ transform: "translate(-50%, -50%)" }}>{p.id}</p>
            </div>
            {p.image && <img className="w-64 h-64" src={p.image} alt={p.name} />}
            <div className='flex flex-col gap-2 items-center'>

                <h2 className="text-2xl font-medium">{p.name[0].toUpperCase() + p.name.slice(1)}</h2>
                <div className='flex flex-row gap-4'>
                    <p className={`w-20 rounded-md px-3 py-0.5 bg-${p.types[0]}`}>{p.types[0][0].toUpperCase() + p.types[0].slice(1)}</p>
                    {
                        p.types[1] ?
                        <p className={`w-20 rounded-md px-3 py-0.5 bg-${p.types[1]}`}>{p.types[1][0].toUpperCase() + p.types[1].slice(1)}</p>
                        :
                        null
                    }
                </div>
            </div>
        </button>
    );
};

export default Card;
