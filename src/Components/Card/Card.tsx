import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.scss";
interface Props {
   data?: any;
}

function Card(props: Props) {
   //    const {} = props;
   const navigate = useNavigate();
   return (
      <figure
         onClick={() => navigate(`/logement/${props.data.id}`)}
         className={style.card}
      >
         <img src={props.data.cover} alt="" />
         <figcaption>
            <h2>{props.data.title}</h2>
         </figcaption>
      </figure>
   );
}

export default Card;
