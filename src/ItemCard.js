import './App.css';
import React from "react";
import Radium from "radium";
import PowersButtons from "./PowersButtons";

const ItemCard = class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            powers: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        powers: result.types,
                        pokemonId: result.id,
                        pokemonObject: result
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
        const { error,  isLoaded, pokemonId } = this.state;
        const name = this.props.name;
        const imgUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokemonId + ".png";

        const style = {
            display: 'flex',
            border: 'solid 1px black',
            width: '250px',
            height: '350px',
            margin: '10px',
            flexDirection: 'column',
            alignItems: 'center',
            ':hover': {
                cursor: 'pointer'
            }
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div style={style} onClick={() => this.props.handleClick(this.state.pokemonObject)}>
                    <div className={"imageSection"}>
                        <img className={"image"} src={imgUrl} alt={name}/>
                    </div>
                    <div>{name}</div>
                    <PowersButtons powers={this.state.powers} />
                </div>
            )
        }
    }
}

export default Radium(ItemCard);