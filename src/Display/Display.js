import React from "react";
import audioData from '../AudioData/audio_files (1)'
import AudioList from "../AudioList/AudioList";
import styles from "./Display.module.css"

class Display extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: 'Meditation',
        }
    }

    render() {

        const categorySelect = audioData.filter((data) => {
            return data.category === this.state.category
        });
        const meditation = () => {
            this.setState({category: "Meditation"})
        };
        const breathing = () => {
            this.setState({category: "Breathing"})
        };
        const relaxation = () => {
            this.setState({category: "Relaxation"})
        };
        const listItems = categorySelect.map((data) =>
            <AudioList key={data.id}
                       label={data.label}
                       category={data.category}
                       speaker={data.speaker}
                       url={data.url}
                       description={data.description}/>
        );

        return (

            <div className={styles.gridContainer}>
                <div className={styles.category}>
                    <p>Please Select A Category </p>
                    <button onClick={meditation}>Meditation</button>
                    <button onClick={breathing}>Breathing</button>
                    <button onClick={relaxation}>Relaxation</button>
                </div>

                <div className={styles.tableContainer}>
                    {listItems}
                </div>

            </div>
        );
    }
}

export default Display;

