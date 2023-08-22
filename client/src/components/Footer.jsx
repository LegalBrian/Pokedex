import logoB from "../images/logo-blanco.png";

const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-[#000000] p-[24px]">
            <a href={"/pokedex" + "#"} className="flex flex-col justify-center items-center text-center text-decoration-none">
                <img src={logoB} className="w-[180px] h-[180px]" alt="Logo" />
                <p className="text-[17px] text-[#ffffff]">Brian Legal Pokedex 2022</p>
            </a>
        </div>
    );
}
export default Footer;