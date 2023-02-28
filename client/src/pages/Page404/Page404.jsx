import Header from "../../components/Header/Header";
import style from "./Page404.module.css";

const PageNotFound404 = () => {
  return (
    <div className={style.container}>
      <Header />
      <h1 className={style.error404}>Error 404</h1>
      <h2 className={style.notFound}>Page not found</h2>
    </div>
  );
};

export default PageNotFound404;