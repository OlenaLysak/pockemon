// import logo from './logo.svg';
import React from "react";
import './App.css';
import ItemsList from "./ItemsList";
import SelectedItem from "./SelectedItem"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState({selected: !this.state.selected})
        console.log("Clicked!");
    }

    render() {
        return (
            <div className={"cover"}>
                <div className={"title"}>Pokedex</div>
                <div className={"container"}>
                    <div className={"listContainer"}>
                        <ItemsList handleClick={this.handleClick}/>
                        <button className={"loadButton"}>Load More</button>
                    </div>
                    <SelectedItem/>
                </div>
            </div>
        );
    }
}

export default App;
