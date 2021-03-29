// import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className={"cover"}>
        <div className={"title"}>Pokedex</div>
        <div className={"container"}>
            <div className={"listContainer"}>
                <div className={"list"}>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Bulbazar</div>
                        <div className={"buttonsContainer"}>
                            <button className={"greenButton"}>Grass</button>
                            <button className={"purpleButton"}>Poison</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Charmander</div>
                        <div className={"buttonsContainer"}>
                            <button className={"redButton"}>Fire</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Pikachu</div>
                        <div className={"buttonsContainer"}>
                            <button className={"yellowButton"}>Electric</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Bulbazar</div>
                        <div className={"buttonsContainer"}>
                            <button className={"greenButton"}>Grass</button>
                            <button className={"purpleButton"}>Poison</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Charmander</div>
                        <div className={"buttonsContainer"}>
                            <button className={"redButton"}>Fire</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Pikachu</div>
                        <div className={"buttonsContainer"}>
                            <button className={"yellowButton"}>Electric</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Bulbazar</div>
                        <div className={"buttonsContainer"}>
                            <button className={"greenButton"}>Grass</button>
                            <button className={"purpleButton"}>Poison</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Charmander</div>
                        <div className={"buttonsContainer"}>
                            <button className={"redButton"}>Fire</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Pikachu</div>
                        <div className={"buttonsContainer"}>
                            <button className={"yellowButton"}>Electric</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Bulbazar</div>
                        <div className={"buttonsContainer"}>
                            <button className={"greenButton"}>Grass</button>
                            <button className={"purpleButton"}>Poison</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Charmander</div>
                        <div className={"buttonsContainer"}>
                            <button className={"redButton"}>Fire</button>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div className={"imageSection"} />
                        <div>Pikachu</div>
                        <div className={"buttonsContainer"}>
                            <button className={"yellowButton"}>Electric</button>
                        </div>
                    </div>
                </div>
                <button className={"loadButton"}>Load More</button>
            </div>
            <div className={"selectedSection"}>
                <div className={"selectedItem"}>
                    <div className={"imageSelectedItem"} />
                    <div className={"selectedTitle"}>Charmander #004</div>
                    <table  border="1" className={"tableOfAbilities"}>
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
                    </table>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;
