import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Layout from "../Components/Layout/Layout";
import LodgingContainer from "../Components/LodgingContainer/LodgingContainer";
interface item {
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
}
function Home() {
   const [lodgingList, setLodgingList] = useState<item[]>();
   const fetchData = async () => {
      const response = await fetch("/datas/lodgingsData.json");
      const data = await response.json();
      setLodgingList(data);
   };
   useEffect(() => {
      fetchData();
   }, []);
   return (
      <Layout currentPage="home">
         <Banner page="home">
            <h1>Chez vous, partout et ailleurs</h1>
         </Banner>
         <LodgingContainer list={lodgingList} />
      </Layout>
   );
}

export default Home;
