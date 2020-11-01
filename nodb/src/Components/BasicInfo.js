import React from "react";

const BasicInfo = (props) => {
  //destructure
  let {
    scientific_name,
    common_name,
    genus,
    family_common_name,
  } = props.species;
  return (
    <li className="basicinfo">
      <h2>{scientific_name ? scientific_name : null}</h2>
      <h2>{common_name ? common_name : null}</h2>
      <h3>{genus ? genus : null}</h3>
      <h3>{family_common_name ? family_common_name : null}</h3>
    </li>
  );
};

export default BasicInfo;

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
