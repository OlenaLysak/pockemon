import './App.css';
import React from "react";


class PowersButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonTypes: [
                {
                    type: "Grass",
                    class: "greenButton"
                },
                {
                    type: "Poison",
                    class: "purpleButton"
                },
                {
                    type: "Fire",
                    class: "redButton"
                },
                {
                    type: "Electric",
                    class: "yellowButton"
                }
            ]
        }
    }
    convertClass(power) {
        for (let i = 0; i < this.state.buttonTypes.length; i++) {
            if (this.state.buttonTypes[i].type === power) {
                return this.state.buttonTypes[i].class;
            }
        }
    }

    render() {
        return (
            <div className={"buttonsContainer"}>
                {this.props.powers.map((power, i) => (
                    <button key={i} className={this.convertClass(power)}>{power}</button>
                ))}
            </div>
        )
    }
}



export default PowersButtons;