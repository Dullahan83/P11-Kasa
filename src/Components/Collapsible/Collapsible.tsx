import React, { useEffect, useRef, useState } from "react";
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
   const myRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [height, setHeight] = useState<number>();
   function handleClick() {
      setIsOpen((prev) => !prev);
   }
   useEffect(() => {
      isOpen
         ? setHeight(myRef.current?.getBoundingClientRect().height)
         : setHeight(0);
   }, [isOpen]);
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
         <div className={style.collapsibleContent} style={{ height }}>
            <div ref={myRef}>
               <div className={style.children}>{children}</div>
            </div>
         </div>
      </div>
   );
}

export default Collapsible;
