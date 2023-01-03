import React from "react";
import "./Star.css";
interface Props {
   rated?: boolean;
}

function Star({ rated }: Props) {
   // const {} = props

   return <i className={rated ? "icon-star rated" : "icon-star"}></i>;
}

export default Star;
