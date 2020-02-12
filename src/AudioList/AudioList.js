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

                <td><audio controls={true} src={props.url}></audio>
                </td>
            </tr>
        </table>

    } else {
        info = <div className={styles.trackInfo}>
            <ul>
                <li>{props.label}</li>
                <li>{props.speaker}</li>
                <li>{props.category}</li>
                <li>{props.description}</li>

                <li>

                        <audio onError={() => setError(true)}
                               controls={true} src={props.url}></audio>
                </li>

                <li>
                    <button onClick={() => setToggle(!toggle)}>Close</button>
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
