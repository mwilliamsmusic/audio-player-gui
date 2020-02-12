import React from "react";
import audioData from '../AudioFiles/audio_files (1).json'
import AudioList from "./AudioList/AudioList";

class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'Relaxation',
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

        return (

            <div>
                <p>Please select a category: </p>
                <button onClick={meditation}>Meditation</button>
                <button onClick={breathing}>Breathing</button>
                <button onClick={relaxation}>Relaxation</button>

                {Object.keys(categorySelect).map((obj, i) => {
                    return (
                        <table>
                        <tr>   <AudioList id={categorySelect[obj].id}
                                       label={categorySelect[obj].label}
                                       category={categorySelect[obj].category}
                                       speaker={categorySelect[obj].speaker}
                            url={categorySelect[obj].url}/>
                        </tr>
                        </table>
                    )
                })}
            </div>
        );
    }
}

export default Display;

