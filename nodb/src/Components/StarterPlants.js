import React, { Component } from "react";
import axios from "axios";
import BasicInfo from "./BasicInfo";

class StarterPlants extends Component {
  constructor() {
    super();

    this.state = {
      displayArr: [],
    };
  }

  componentDidMount() {
    axios.get("/api/species").then((res) => {
      this.setState({
        displayArr: res.data,
      });
    });
  }

  render() {
    let display = [];
    display = this.state.displayArr.map((species) => (
      <BasicInfo key={species.id} species={species} />
    ));

    return (
      <aside style={{ float: "right" }}>
        <h1 style={{ textAlign: "center", color: "whitesmoke" }}>
          StarterPlants
        </h1>
        <ul>{display}</ul>
      </aside>
    );
  }
}

export default StarterPlants;

// handleInput = (e) => {
//   this.setState({ searchInput: e.target.value });
//   axios
//     .get(`/api/pokemon?search=${e.target.value}`)
//     .then((res) => {
//       this.setState({ displayPokemon: res.data });
//     })
//     .catch((err) => console.log(err));
// };
