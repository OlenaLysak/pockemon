import './App.css';
import React from "react";
import PowersButtons from "./PowersButtons";

class ItemCard extends React.Component {

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
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className={"item"}>
                    <div className={"imageSection"} />
                    <div>{name}</div>
                    <PowersButtons powers={this.state.powers} />
                </div>
            )
        }
    }
}

export default ItemCard;