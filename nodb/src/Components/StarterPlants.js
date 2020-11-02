import React, { Component } from "react";
import axios from "axios";
import BasicInfo from "./BasicInfo";

class StarterPlants extends Component {
  constructor(props) {
    super(props);

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
      <BasicInfo key={species.id} species={species} saveToMyHousePlantsArr = {this.props.saveToMyHousePlantsArr} />
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

