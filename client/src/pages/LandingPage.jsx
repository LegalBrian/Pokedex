import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const LandingPage = () => {
    return(
        <div className="flex flex-col items-center gap-2 text-center justify-center w-screen min-h-screen">
            <Logo width="56" height="56" className="stroke-main-dark" />

            <div className="flex flex-col gap-2 text-center items-center">
                <h1 className="text-5xl text-main-dark font-inter font-bold">Welcome to the Pokedex!</h1>

                <p className="text-base text-main-dark font-code font-normal max-w-md">
                Gotta catch 'em all!
                </p>

            </div>

            <Link
                to="/pokedex"
                className="text-lg text-main-dark font-code font-medium border-2 border-solid border-main-dark outline-none px-6 py-1.5 hover:text-main-light hover:bg-[#007aff] transition duration-500 -skew-x-32"
            >
                <p className="skew-x-32">Start!!!</p>
            </Link>
        </div>
    )
}

export default LandingPage;