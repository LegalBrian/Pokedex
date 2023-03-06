import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import style from "./Page404.module.css";
import img404 from "../../images/404.png"

const PageNotFound404 = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.animate__animated + " " + style.animate__fadeIn}>Error 404</h1>
        <h2 className={style.animate__animated + " " + style.animate__fadeIn}>Page not found</h2>
        <img src={img404} className={style.image} />
      </div>
      <Footer/>
    </div>
  );
};

export default PageNotFound404;