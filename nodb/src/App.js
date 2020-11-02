import React, {Component} from 'react'
import './App.css';
import Header from "./Components/Header";
import StarterPlants from "./Components/StarterPlants";
import FeaturedPlant from "./Components/FeaturedPlant";
import axios from 'axios';
import MyHousePlants from './Components/MyHousePlants';


class App extends Component {
  constructor(){
    super();
    
      this.state = {
        myHousePlants: []
      }
      this.saveToMyHousePlantsArr =this.saveToMyHousePlantsArr.bind(this)
      this.removeFromMyHousePlantsArr = this.removeFromMyHousePlantsArr.bind(this)
  }
  saveToMyHousePlantsArr(id) {
    axios
      .post(`/api/plants/${id}`)
      .then((res) => {
        console.log(id)
        this.setState( {myHousePlants: res.data});
      })
      .catch((error) => console.log(error));
  }
  removeFromMyHousePlantsArr = (index) => {
    axios
      .delete(`/api/plants/${index}`)
      .then((res) => {
        this.setState({ myHousePlants: res.data });
      })
      .catch((error) => console.log(error));
  };
  render(){
  return (
    <div >
      <Header/>
      <main>
        <FeaturedPlant saveToMyHousePlantsArr = {this.saveToMyHousePlantsArr}/>
        <MyHousePlants myHousePlants = {this.state.myHousePlants} removeFromMyHousePlantsArr = {this.removeFromMyHousePlantsArr}/>
      </main>  
      <aside>
        <StarterPlants saveToMyHousePlantsArr = {this.saveToMyHousePlantsArr}/>
      </aside>
    </div>
  );
  }
}

export default App;
