import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.scss";
interface Props {
   children?: React.ReactNode;
}

function Layout({ children }: Props) {
   //    const {} = props;

   return (
      <div>
         <Header />
         <div className={style.childContainer}>{children}</div>
         <Footer />
      </div>
   );
}

export default Layout;
