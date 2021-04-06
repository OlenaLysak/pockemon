import './App.css';
import React from "react";
import PowersButtons from "./PowersButtons";

class ItemCard extends React.Component {
    render() {
        const { name, powers } = this.props;
        return (
            <div className={"item"}>
                <div className={"imageSection"} />
                <div>{name}</div>
                {/*<PowersButtons powers={powers} />*/}
            </div>
        )
    }
}

export default ItemCard;