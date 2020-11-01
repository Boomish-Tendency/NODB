import React from "react";

const SoilProfile = (props) => {
  //destructure
  let {
    ground_humidity,
    soil_nutriments,
    soil_salinity,
    foliage_texture,
  } = props.species;
  return (
    <li className="bkimg">
      <h2>
        {ground_humidity
          ? `I prefer my soil to be a ${ground_humidity}/10 on the dampness scale.`
          : null}
      </h2>
      <h2>
        {soil_nutriments > 5
          ? `I need rich soil.`
          : "I'm not that picky about my soil"}
      </h2>
      <h3>
        {soil_salinity
          ? `I can tolerate salt level of ${soil_salinity}/10`
          : null}
      </h3>
      <h3>
        {foliage_texture ? `I prefer my soil to be ${foliage_texture}` : null}
      </h3>
    </li>
  );
};

export default SoilProfile;
// Access to API listing scientific name

// Class Components Ideas:
//     Basic Info Tab: Picture and Name
//     Specifications:  Height, Growth Habit, Edible?
//     Growing Info: Light, Humidity range, Ph range:, Precipitation range:, temperature range,
//     Soil profile:  soil humidity, soil nutrient, salinity, texture

// Display Components:
//     Header + Title
//     Right Nav Bar with 4 Button.
//         -Swap to Basic view
//         -Swap to Specifications view
//         -Swap to Swap to Growing view
//         -Swap to Soil Profile view

// CRUD
// GET  Plant by name
// POST Plants to My House
// PUT Input for adding Room property
// DELETE plant from My House
