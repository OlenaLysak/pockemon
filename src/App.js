// import logo from './logo.svg';
import React from "react";
import './App.css';
import ItemsList from "./ItemsList";
import SelectedItem from "./SelectedItem"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false,
            selectedPokemonData: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(pokemonObject) {
        this.setState({
            selected: !this.state.selected,
            selectedPokemonData: pokemonObject
        });
    }

    render() {
        let pokemonData = this.state.selectedPokemonData ? this.state.selectedPokemonData : null;
        return (
            <div className={"cover"}>
                <div className={"title"}>Pokedex</div>
                <div className={"container"}>
                    <div className={"listContainer"}>
                        <ItemsList handleClick={this.handleClick}/>
                        <button className={"loadButton"}>Load More</button>
                    </div>
                    <SelectedItem pokemonData={pokemonData}/>
                </div>
            </div>
        );
    }
}

export default App;
