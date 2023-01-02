import React, { useState } from "react";
import style from "./Collapsible.module.scss";
import Chevron from "../../assets/Chevron.png";
interface Props {}

interface Props {
   title: string;
   children?: React.ReactNode;
   inLodging?: boolean;
}

function Collapsible({ title, children, inLodging }: Props) {
   //    const {} = props;
   const [isOpen, setIsOpen] = useState(false);
   function handleClick() {
      setIsOpen((prev) => !prev);
   }
   return (
      <div
         className={
            inLodging
               ? `${style.collapsible} ${style.lodgingCollapsible}`
               : `${style.collapsible} `
         }
      >
         <button type="button" onClick={handleClick}>
            {title}
            <img src={Chevron} alt="" className={`${isOpen && style.deploy}`} />
         </button>
         {isOpen && <div>{children}</div>}
      </div>
   );
}

export default Collapsible;
