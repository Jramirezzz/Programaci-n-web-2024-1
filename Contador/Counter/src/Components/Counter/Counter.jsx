import React, {useState} from "react";

export default function Counting (props){
    const {Counter} = props 
    return(
        <>
        <div class="terminal-loader">
            <div class="terminal-header">
                <div class="terminal-title">Status</div>
                <div class="terminal-controls">
                <div class="control close"></div>
                <div class="control minimize"></div>
                <div class="control maximize"></div>
                </div>
            </div>
            <div class="text">{Counter}</div>
            </div>
      </>


)

}