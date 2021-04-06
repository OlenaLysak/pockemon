import './App.css';
import React from "react";


class PowersButtons extends React.Component {

    convertClass(power) {
        const buttonTypes = [
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
        for (let i = 0; i < buttonTypes.length; i++) {
            if (buttonTypes[i] === power) {
                return buttonTypes[i].class;
            }
        }
    }

    // let powerClass = this.convertClass('Fire');

    render() {
        const powers = this.props.powers;
        return (
            <div className={"buttonsContainer"}>
                {powers.map((power, i) => (
                    <button key={i} className={this.convertClass(power)}>{power}</button>
                ))}
            </div>
        )
    }
}



export default PowersButtons;