import logoB from "../../images/logo-blanco.png";
import style from './Footer.module.css';

const Footer = () => {
    return (
        <a href={"/pokedex" + "#"} className={style.footerContainer}>
            <img src={logoB} className={style.footerLogo} alt="Logo" />
            <p className={style.footerText}>Brian Legal Pokedex 2022</p>
        </a>
    );
}
export default Footer;