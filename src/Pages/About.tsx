import React, { useState } from "react";
import Banner from "../Components/Banner/Banner";
import Collapsible from "../Components/Collapsible/Collapsible";
import Layout from "../Components/Layout/Layout";
import style from "./About.module.scss";
interface Props {}

function About(props: Props) {
   //    const {} = props;

   return (
      <>
         <Layout currentPage="about">
            <div className={style.aboutContent}>
               <Banner page="about" />
               <Collapsible title="Fiabilité">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
               </Collapsible>
               <Collapsible title="Respect">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation de
                  voisinage entrainera une exclusion de notre plateforme.
               </Collapsible>
               <Collapsible title="Service">
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
               </Collapsible>
               <Collapsible title="Responsabilité">
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
               </Collapsible>
            </div>
         </Layout>
      </>
   );
}

export default About;
