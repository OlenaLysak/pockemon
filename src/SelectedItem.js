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
        // const {error, isLoaded} = this.state;

        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
            return (
                <div className={"selectedSection"}>
                    <div className={"selectedItem"}>
                        <div className={"imageSelectedItem"}/>
                        <div className={"selectedTitle"}>Charmander #004</div>
                        <table border="1" className={"tableOfAbilities"}>
                            <tbody>
                            <tr>
                                <td className={"ability"}>Type</td>
                                <td className={"abilityValue"}>Fire</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>Attack</td>
                                <td className={"abilityValue"}>52</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>Defense</td>
                                <td className={"abilityValue"}>43</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>HP</td>
                                <td className={"abilityValue"}>39</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>SP Attack</td>
                                <td className={"abilityValue"}>60</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>SP Defense</td>
                                <td className={"abilityValue"}>50</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>Speed</td>
                                <td className={"abilityValue"}>65</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>Weight</td>
                                <td className={"abilityValue"}>85</td>
                            </tr>
                            <tr>
                                <td className={"ability"}>Total moves</td>
                                <td className={"abilityValue"}>89</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        // }
    }
}

export default SelectedItem;