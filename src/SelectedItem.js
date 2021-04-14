import './App.css';
import React from "react";

class SelectedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            visible: false,
            ulr: ""
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        // powers: result.types,
                        // pokemonId: result.id
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        if (this.props.pokemonData) {
            let data = this.props.pokemonData;
            let name = data.species.name + " #" + data.id;
            let type = data.types[0].type.name;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let hp = data.stats[0].base_stat;
            let spAttack = data.stats[3].base_stat;
            let spDefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            let weight = data.weight;
            let totalMoves = data.moves.length;
            const imgUrl = "https://pokeres.bastionbot.org/images/pokemon/" + data.id + ".png"
            return (
                <div className={"selectedSection"}>
                    <div className={"selectedItem"}>
                        <div className={"imageSelectedItem"}>
                            <img className={"selectedImage"} src={imgUrl} alt={name}/>
                            <div/>
                            <div className={"selectedTitle"}>{name}</div>
                            <table border="1" className={"tableOfAbilities"}>
                                <tbody>
                                <tr>
                                    <td className={"ability"}>Type</td>
                                    <td className={"abilityValue"}>{type}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>Attack</td>
                                    <td className={"abilityValue"}>{attack}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>Defense</td>
                                    <td className={"abilityValue"}>{defense}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>HP</td>
                                    <td className={"abilityValue"}>{hp}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>SP Attack</td>
                                    <td className={"abilityValue"}>{spAttack}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>SP Defense</td>
                                    <td className={"abilityValue"}>{spDefense}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>Speed</td>
                                    <td className={"abilityValue"}>{speed}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>Weight</td>
                                    <td className={"abilityValue"}>{weight}</td>
                                </tr>
                                <tr>
                                    <td className={"ability"}>Total moves</td>
                                    <td className={"abilityValue"}>{totalMoves}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"selectedSection"}/>
            )
        }
    }
}

export default SelectedItem;