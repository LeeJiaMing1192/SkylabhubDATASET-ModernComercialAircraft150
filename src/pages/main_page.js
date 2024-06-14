import React from "react";
import "../index.css"


function Main_page() {
    let data_comerc, airbus_a320_img;
  
    async function fetch_comerical_planes() {
      try {
        const response = await fetch("https://aerocraft-server-getaircrafts.vercel.app/api/get_planes_com");
        const data = await response.text();
        console.log(data);
  
        data_comerc = data["company_name"]["Airbus"];
        airbus_a320_img = data_comerc["Airbus A320"]["aircraft_image"];
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetch_comerical_planes()
    // Call the fetch function and return a promise

      return (
        <div>
          <img id="plane_img" src={airbus_a320_img} />
        </div>
      );
    }

  

export default Main_page;