import React, {Component} from 'react'
import './App.css';
import Header from "./Components/Header";
import StarterPlants from "./Components/StarterPlants"
import FeaturedPlant from "./Components/FeaturedPlant"
import axios from "axios";

class App extends Component {
  constructor(){
    super();

    this.state = {
      myHousePlants: []
    };

  }
  
  render(){
  return (
    <div >
      <Header/>
      <main>
        <FeaturedPlant/>
      </main>  
      <aside>
        <StarterPlants />
      </aside>
    </div>
  );
  }
}

export default App;
