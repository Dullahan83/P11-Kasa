import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Lodging from "../Pages/Lodging";
interface Props {}

function Router(props: Props) {
   //    const {} = props;

   return (
      <BrowserRouter>
         <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Lodging />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
