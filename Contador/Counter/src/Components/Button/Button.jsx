import React, {useState} from "react";

export default function Button (props){
    const {onClick,type,title} = props 
    return(
        <>
        <button className="Add"onClick={()=>onClick(type)} >
            <p>{title}</p>
        </button>
      </>


)

}