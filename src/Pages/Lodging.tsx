import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carrousel from "../Components/Carrousel/Carrousel";
import Layout from "../Components/Layout/Layout";
import Tag from "../Components/Tag/Tag";
import Collapsible from "../Components/Collapsible/Collapsible";
import style from "./Lodging.module.scss";
interface Props {}
type lodging = {
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

function Lodging(props: Props) {
   //    const {} = props;
   const url = new URL(window.location.href);
   const id = url.pathname.split("logement/")[1];
   const [lodgingData, setLodgingData] = useState<lodging>();
   const navigate = useNavigate();

   const fetchDatas = async () => {
      const response = await fetch("/datas/lodgingsData.json");
      const data = await response.json();
      const currentLodging = data.filter(
         (lodging: lodging) => lodging.id === id
      );
      currentLodging.length !== 0
         ? setLodgingData(currentLodging[0])
         : navigate("*");
   };
   useEffect(() => {
      fetchDatas();
   }, []);
   return (
      <Layout>
         <Carrousel photos={lodgingData?.pictures} />
         <section>
            <div className={style.infosContainer}>
               <div className={style.lodgingInfos}>
                  <div className={style.infosHeader}>
                     <h1>{lodgingData?.title}</h1>
                     <h2>{lodgingData?.location}</h2>
                  </div>
                  <div className={style.tagContainer}>
                     {lodgingData?.tags.map((tag, key) => {
                        return <Tag title={tag} key={key} />;
                     })}
                  </div>
               </div>
               <div className={style.socialInfos}>
                  <div>
                     <p>{lodgingData?.host.name}</p>
                     <img src={lodgingData?.host.picture} alt="" />
                  </div>
                  <div>Ratings will go there</div>
               </div>
            </div>
            <div className={style.collapsibleContainer}>
               <div>
                  <Collapsible title="Description" inLodging={true}>
                     {lodgingData?.description}
                  </Collapsible>
               </div>
               <div>
                  <Collapsible title="Equipements" inLodging={true}>
                     {lodgingData?.equipments.map((equipment, key) => {
                        return <p key={key}>{equipment}</p>;
                     })}
                  </Collapsible>
               </div>
            </div>
         </section>
      </Layout>
   );
}

export default Lodging;
