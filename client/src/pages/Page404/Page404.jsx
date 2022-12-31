import NavBar from "../../components/NavBar/NavBar";
import image from "../../images/404Icon.png"
import style from "./Page404.module.css"

const PageNotFound404 = () => {
  return (
    <div className={style.container}>
      <NavBar />
      <h1 className={style.error404}>Error 404</h1>
      <h2 className={style.notFound}>Page not found</h2>
      <img className={style.image} src={image}/>
    </div>
  );
};

export default PageNotFound404;