import React from "react";
import style from "./Banner.module.scss";
interface Props {
   page: string;
   children?: React.ReactNode;
}

function Banner({ page, children }: Props) {
   // const {} = props

   return (
      <div className={`${style.banner} ${style[page]}`}>
         <span></span>
         {page === "home" && children}
      </div>
   );
}

export default Banner;
