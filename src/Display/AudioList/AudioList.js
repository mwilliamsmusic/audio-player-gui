import React, { useState } from "react";
import styles from "./AudioList.css"

function AudioList(props) {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <td> {props.label} </td> <td>{props.speaker}</td> <td>{props.category}</td>
            <td> <audio controls={true} src={props.url}></audio> </td>
            <td><button onClick={()=>setToggle(!toggle)}>Track Info</button></td>
        </div>
    );
}
export default AudioList;
