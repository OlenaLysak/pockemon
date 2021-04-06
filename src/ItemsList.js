import './App.css';
import React from "react";
import ItemCard from "./ItemCard";

class ItemsList extends React.Component {
    render() {
        const items = [
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
        return (
            <div className={"list"}>
                {items.map((item, index) => (
                    <ItemCard key={index} name={item.name} powers={item.powers} />
                ))}

            </div>
        )
    }
}

export default ItemsList;