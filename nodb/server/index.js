const express = require("express");
const app = express();
const plantControl = require("./controller.js");
const port = 4000;

//Middleware
app.use(express.json()); //filters inputs into JSON.

//Control Methods
app.get("/api/initial", plantControl.getInitial);
app.get("/api/species", plantControl.getStarterPlants); //Loop through length of species.json and return a random sample of plants for display by randomizing index of the array of objects.
app.get("/api/featured", plantControl.getOnePlant); //Using .find on species.json array to send a plant that matches the object found by the search input.
app.post("/api/plants/:id", plantControl.addToHouse); //Saves a selected plant to the myHousePlants array and sets an empty "room" property whose value may be added later.
// app.get("/api/myhouseplants"), plantControl.getMyHousePlants; //Returns MyHousePlants array 
app.put("/api/featured/:id", plantControl.changePhoto); //Adds an input value to the "room" property to selected object from myHousePlants array.  Plants in the same room should be grouped by similar light or temperature requirements. 
app.get("/api/room", plantControl.getPlantsByRoom);  //filter myHousePlants array for all plants in a particular room.
app.delete("/api/plants/:index", plantControl.removeFromMyHousePlants);//deletes plant from the myHousePlants array.  For use when a plant has died or is given away.

//Listen method:  Output should be 'server listening on port 4000'.
app.listen(port, () => console.log(`server listening on port ${port}`));
