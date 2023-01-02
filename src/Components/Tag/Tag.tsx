import React from "react";
import "./Tag.scss";
interface Props {
   title?: string;
}

function Tag(props: Props) {
   // const {} = props

   return <div className="tag">{props.title}</div>;
}

export default Tag;
