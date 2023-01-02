import React from "react";
import Layout from "../Components/Layout/Layout";
import error from "../assets/404.png";
import { useNavigate } from "react-router-dom";
import style from "./Error.module.scss";
interface Props {}

function Error(props: Props) {
   //    const {} = props;
   const navigate = useNavigate();
   return (
      <Layout>
         <div className={style.errorContent}>
            <img src={error} alt="" />
            <h1>Oups! La page que vous recherchez n'existe pas.</h1>
            <p onClick={() => navigate("/")}>Retourner sur la page d'accueil</p>
         </div>
      </Layout>
   );
}

export default Error;
