import './App.css';
import React from "react";
import ItemCard from "./ItemCard";

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        // return (
        //     <div className={"list"}>
        //         {this.state.items.map((item, index) => (
        //             <ItemCard key={index} name={item.name} />
        //         ))}
        //
        //     </div>
        // )
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className={"list"}>
                         {this.state.items.map((item, index) => (
                             <ItemCard key={index} name={item.name} />
                         ))}
                </div>
            );
        }
    }
}

export default ItemsList;