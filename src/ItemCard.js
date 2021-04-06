import './App.css';
import React from "react";
import PowersButtons from "./PowersButtons";

class ItemCard extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <div className={"item"}>
                <div className={"imageSection"} />
                <div>{name}</div>
                <PowersButtons powers={this.props.powers} />
            </div>
        )
    }
}

export default ItemCard;