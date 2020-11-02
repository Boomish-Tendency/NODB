import React, { Component } from "react";
import GrowthInfo from "./GrowthInfo";
import BasicInfo from "./BasicInfo";
import SoilProfile from "./SoilProfile";
import Specifications from "./Specifications";
import axios from "axios";

class FeaturedPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      holdingArr: [],
      inputbox: ""

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

  changeHandler(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
  changePicture = (e) => {
    e.preventDefault()
    let id = this.state.holdingArr[0].id 
    let {inputbox} = this.state
    axios
      .put(`/api/featured/${id}`, {inputbox})
      .then((res) => {
        this.setState({ 
          inputbox: res.data,
          holdingArr: res.data, });
      })
      .catch((err) => console.log(err));
    
    }
  
  render() {
    console.log(this.state.inputbox)
    let display = [];
    display = this.state.holdingArr.map((species) => (
      <div>
        <BasicInfo key={species.id} species={species} saveToMyHousePlantsArr = {this.props.saveToMyHousePlantsArr}/>
        <a><img
          src={this.state.holdingArr[0].image_url}
          height="200"
          width="200"
          alt=""
        />
        </a>
        <form onSubmit={(e) => this.changePicture(e) } >
          <input name="inputbox" type="text" placeholder = "Type a new image url here!" onChange={(e)=>this.changeHandler(e)}/>
          <input type="submit" value="submit" />
        </form>
        <GrowthInfo key={(species.id +1)} species={species} />
        <SoilProfile key={(species.id +2)} species={species} />
        <Specifications key={(species.id +3)} species={species} />
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
