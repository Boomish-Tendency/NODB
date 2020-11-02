const PlantList = require("./species.json");
let myHousePlants = []; //empty array for saving favorite plants.

module.exports = {
  getInitial: (req, res) => {
    res.status(200).send([PlantList[0]]);
  },
  getStarterPlants: (req, res) => {
    //initialize empty array for results
    const starterSampleArr = [];
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * PlantList.length - 1);
      starterSampleArr.push(PlantList[index]);
    }
    res.status(200).send(starterSampleArr);
    //Loop through length of species.json and return a random sample of plants for display by randomizing index of the array of objects.
  },
  getOnePlant: (req, res) => {
    //destructure
    const { search } = req.query;
    const findPlant = PlantList.find(function (e,i) {
   
      return e.common_name === search
    });

    if (!findPlant) {
      res.status(500).send("Error: Plant Not Found.");
    }
    res.status(200).send([findPlant]);

    //Using .find on species.json array to send a plant that matches the object found by the search input.
  },
  addToHouse: (req, res) => {
    //destructure
    const { id } = req.params;
    const newHousePlant = { ...PlantList.find((plant) => plant.id == id) };
    //set empty prop
    newHousePlant.room = "";

    myHousePlants.push(newHousePlant);

    res.status(200).send(myHousePlants);
    //Saves a selected plant to the myHousePlants array and sets an empty "room" property whose value may be added later.
  },
  addRoomProp: (req, res) => {
    //destructure
    const { index } = req.params;
    const { room } = req.body;

    myHousePlants[index].room = room;

    res.status(200).send(myHousePlants);
    //Adds a input value to the "room" property to selected object from myHousePlants array.  Plants in the same room should be grouped by similar light or temperature requirements.
  },
  // getMyHousePlants: (req, res) => {
  //   res.status(200).send(myHousePlants);
  //   //Returns MyHousePlants array
  // },
  getPlantsByRoom: (req, res) => {
    //destructure
    const { input } = req.query;
    //test for input => return error
    if (!input) {
      res.status(500).send("Error: Please try again");
    }
    //filter myHousePlants array for all plants in a particular room.
    const plantsByRoom = myHousePlants.filter((input) => input.room === input);

    res.status(200).send(plantsByRoom);
  },
  removeFromMyHousePlants: (req, res) => {
    //destructure
    const { index } = req.params;

    myHousePlants.splice(index, 1);

    res.status(200).send(myHousePlants);
    //deletes plant from the myHousePlants array.  For use when a plant has died or is given away.
  },
};
