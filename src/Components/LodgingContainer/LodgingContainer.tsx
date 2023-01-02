import React from "react";
import Card from "../Card/Card";
import style from "./LodgingContainer.module.scss";
interface Props {
   list?: Lodging[];
}
type Lodging = {
   id: string;
   title: string;
   cover: string;
   pictures: string[];
   description: string;
   host: {
      name: string;
      picture: string;
   };
   rating: string;
   location: string;
   equipments: string[];
   tags: string[];
};
function LodgingContainer(props: Props) {
   return (
      <section className={style.lodgingsContainer}>
         {props.list?.map((lodging) => {
            return <Card key={lodging.id} data={lodging} />;
         })}
      </section>
   );
}

export default LodgingContainer;
