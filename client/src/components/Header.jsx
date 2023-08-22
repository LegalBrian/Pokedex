import { Link } from "react-router-dom";
import logoB from "../images/logo-blanco.png";

const Header = () => { 
    return (
        <header className="flex justify-between items-center h-[80px] px-4 text-[#ffffff] bg-[rgba(0,0,0,1)]">
            <Link to='/'>
                <a>
                    <img src={logoB} alt="Logo" width="64" height="64" />
                </a>
            </Link>
            <nav className="items-center justify-center">
                <Link className="px-4 py-2 hover:text-[#007aff] transition duration-500" to="/pokedex">HOME</Link>
                <Link className="px-4 py-2 hover:text-[#007aff] transition duration-500" to="/create">CREATE</Link>
                <a href="https://legalbrian.vercel.app" target="_blank" className="px-4 py-2 hover:text-[#007aff] transition duration-500">ABOUT</a>
            </nav>
        </header>
    );
}
export default Header;