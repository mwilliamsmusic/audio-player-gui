import React, { useState } from "react";
import styles from "./AudioList.module.css";

function AudioList(props) {

    const [error, setError] = useState(false);
    const [toggle, setToggle] = useState(false);

    let info;

    if (!toggle) {

        info = <table>
            <tr>
                <td>{props.label} </td>
                <td>{props.speaker}</td>
                <td>{props.category}</td>
                <td>
                    <button onClick={() => setToggle(!toggle)}>Track Info</button>
                </td>
                <td>
                    <div style={error ? {display: 'none'} : null}>
                        <audio onError={() => setError(true)}
                               controls={true} src={props.url}></audio>
                    </div>
                    <div style={error ? {display: 'table-cell'} : {display: 'none'}}>
                        <div className={styles.errorDisplay}> <div className={styles.boldText}>File Not Found</div></div>
                    </div>
                </td>
            </tr>
        </table>

    } else {

        info = <div className={styles.trackInfo}>
            <ul>
                <li>
                    <div className={styles.boldText}> Title:</div>
                    {props.label}
                </li>
                <li>
                    <div className={styles.boldText}> Speaker:</div>
                    {props.speaker}
                </li>
                <li>
                    <div className={styles.boldText}> Category:</div>
                    {props.category}
                </li>
                <li>
                    <div className={styles.boldText}>Description:</div>
                    {props.description}
                </li>
                <li>
                    <div style={error ? {display: 'none'} : null}>
                        <audio onError={() => setError(true)}
                               controls={true} src={props.url}></audio>
                    </div>
                </li>
                <li>
                    <div style={error ? {display: 'table-cell'} : {display: 'none'}}>
                        <div className={styles.errorDisplay}></div>
                    </div>
                </li>
                <li>
                    <button  onClick={() => setToggle(!toggle)}>Close</button>
                </li>
            </ul>
        </div>
    }

    return (
        <div>
            {info}
        </div>
    )
}

export default AudioList;
