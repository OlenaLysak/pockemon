import './App.css';
import React from "react";
import ItemCard from "./ItemCard";

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    name: "Bulbazar",
                    powers: ["Grass", "Poison"]
                },
                {
                    name: "Charmander",
                    powers: ["Fire"]
                },
                {
                    name: "Pikachu",
                    powers: ["Electric"]
                },
                {
                    name: "Bulbazar",
                    powers: ["Grass", "Poison"]
                },
                {
                    name: "Charmander",
                    powers: ["Fire"]
                },
                {
                    name: "Pikachu",
                    powers: ["Electric"]
                },
                {
                    name: "Bulbazar",
                    powers: ["Grass", "Poison"]
                },
                {
                    name: "Charmander",
                    powers: ["Fire"]
                },
                {
                    name: "Pikachu",
                    powers: ["Electric"]
                }
            ]
        }
    }

    render() {
        return (
            <div className={"list"}>
                {this.state.items.map((item, index) => (
                    <ItemCard key={index} name={item.name} powers={item.powers} />
                ))}

            </div>
        )
    }
}

export default ItemsList;