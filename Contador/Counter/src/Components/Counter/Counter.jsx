import React, {useState} from "react";

export default function Counting (props){
    const {Counter} = props 
    return(
        <>
        <h1 className="Counter" >
            <p>{Counter}</p>
        </h1>
      </>


)

}