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
                        powers: result.types
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
        const { error,  isLoaded } = this.state;
        const name = this.props.name;

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
                <div style={style}>
                    <div className={"imageSection"} />
                    <div>{name}</div>
                    <PowersButtons powers={this.state.powers} />
                </div>
            )
        }
    }
}

export default Radium(ItemCard);