import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.scss";
interface Props {
   children?: React.ReactNode;
   currentPage?: string;
}

function Layout({ children, currentPage }: Props) {
   //    const {} = props;

   return (
      <div>
         <Header currentPage={currentPage} />
         <div className={style.childContainer}>{children}</div>
         <Footer />
      </div>
   );
}

export default Layout;
