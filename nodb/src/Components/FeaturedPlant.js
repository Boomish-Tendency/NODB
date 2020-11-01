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
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    axios.get("/api/initial/").then((res) => {
      this.setState({
        holdingArr: res.data,
      });
    });
  }

  handleInput = (e) => {
    e.preventDefault();
    let search = this.inputRef.current.value;
    this.setState({
      ...this.state,
      search: search,
    });
    console.log(search);
    axios
      .get(`/api/featured?search=${search}`)
      .then((res) => {
        this.setState({ 
          ...this.state,
          holdingArr: res.data
      });
      })
      .catch((error) => console.log(error));
  };

  //   changeHandler(e){
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     })
  // }

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
        <GrowthInfo key={(species.id += 3)} species={species} />
        <SoilProfile key={(species.id += 1)} species={species} />
        <Specifications key={(species.id += 2)} species={species} />
      </div>
    ));
    return (
      <div className="box">
        <form onSubmit={(e) => this.handleInput(e)}>
          <input ref={this.inputRef} name="name" type="text" />
          <input type="submit" value="submit" />
        </form>
        {display}
      </div>
    );
  }
}

export default FeaturedPlant;
