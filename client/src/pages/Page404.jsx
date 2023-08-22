import Header from "../components/Header";
import Footer from "../components/Footer"
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const PageNotFound404 = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
        <Logo width="56" height="56" className="stroke-main-dark" />

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-2xl text-main-dark font-inter font-bold">A wild 404 Error appeared!</h3>

          <p className="text-base text-main-dark font-code font-normal max-w-md">
            <strong className="font-medium">Error 404</strong> - Page Not Found.
          </p>

          <p className="text-base text-main-dark font-code font-normal max-w-md">
            Sorry, Trainer! The Pokémon you are seeking is nowhere to be found.
          </p>
        </div>

        <Link
          to="/"
          className="text-lg text-[#278fff] font-code font-medium border-2 border-solid border-[#278fff] outline-none px-6 py-1.5 hover:text-main-light hover:bg-[#278fff] transition-all"
        >
          Go to Home
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default PageNotFound404;