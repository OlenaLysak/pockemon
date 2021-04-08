import './App.css';
import React from "react";


class PowersButtons extends React.Component {
    render() {
        return (
            <div className={"buttonsContainer"}>
                {this.props.powers.map((power, i) => (
                    <button key={i}>{power.type.name}</button>
                ))}
            </div>
        )
    }
}



export default PowersButtons;