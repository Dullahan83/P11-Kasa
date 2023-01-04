import React, { useState } from "react";
import sideChevron from "../../assets/chevronGauche.png";
import "./Carrousel.scss";
interface Props {
   photos?: string[];
}

function Carrousel({ photos }: Props) {
   //    const {} = props;
   const [index, setIndex] = useState<number>(0);

   function previousPicture() {
      photos && index - 1 < 0
         ? setIndex(photos.length - 1)
         : setIndex(index - 1);
   }
   function nextPicture() {
      photos && index + 1 > photos.length - 1
         ? setIndex(0)
         : setIndex(index + 1);
   }
   return (
      <div className="carrousel">
         {photos && photos.length > 1 && (
            <img
               src={sideChevron}
               alt=""
               onClick={previousPicture}
               className="left"
            />
         )}
         <img src={photos && photos[index]} alt="" className="mainImage" />
         {photos && photos.length > 1 && (
            <img
               src={sideChevron}
               alt=""
               onClick={nextPicture}
               className="right"
            />
         )}
         {photos && photos.length > 1 && (
            <span>{index + 1 + "/" + photos.length}</span>
         )}
      </div>
   );
}

export default Carrousel;
