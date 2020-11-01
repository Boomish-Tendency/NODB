import React, { Component } from "react";
import GrowthInfo from "./GrowthInfo";
import BasicInfo from "./BasicInfo";
import SoilProfile from "./SoilProfile";
import Specifications from "./Specifications";
import axios from "axios";

class FeaturedPlant extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      holdingArr: [],
    };
  }
  componentDidMount() {
    axios.get("/api/initial/").then((res) => {
      this.setState({
        holdingArr: res.data,
      });
    });
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value });
    axios
      .get(`/api/featured?search=${e.target.value}`)
      .then((res) => {
        this.setState({ holdingArr: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    //destructure
    let display = [];
    display = this.state.holdingArr.map((species) => (
      <div>
        <BasicInfo key={species.id} species={species} />
        <img
          src={this.state.holdingArr[0].image_url}
          height="200"
          width="200"
          alt=""
        />
        <GrowthInfo key={species.id+=3} species={species} />
        <SoilProfile key={species.id+=1} species={species} />
        <Specifications key={species.id+=2} species={species} />
      </div>
    ));
    return (
      <div className = 'box'>
        <input value={this.state.search} onChange={this.handleInput} />
        {display}
      </div>
    );
  }
}

export default FeaturedPlant;
