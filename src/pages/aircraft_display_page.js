
import React, { useEffect } from "react";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import "../displaypage.css"
import { useContext } from 'react';
import MyContext from '../MyContext';
import { airplane_comercial } from "../data/deatailed_aircraft_prod";


// console.log(sharedData)
function NewPage(){
        const navigate = useNavigate()
        const go_back_search = () =>{
            navigate("/search")
        }   
        const { data, updateData } = useContext(MyContext)
        const choosed_aircraft = airplane_comercial[data]
        var Engines_data = Object.keys(choosed_aircraft["Engines"])   
        var com_operaters = choosed_aircraft["Other Details"]["Commercial Operators"]
      

    // Assuming "Bypass ratio" is a string

    


    return(
        <>
            <nav className="nav-bar">
                <div className="nav-bar-brand" onClick={() => go_back_search()}>
                    <img id="menu-logo" src={Menu_logo}></img>
                    <img id="logo-image" src={Com_logo}></img>
                    <h2>Skylab</h2>
                </div>
            </nav>
            <div className="aircraft-name-container">
                <h1>{data}</h1>
            </div>
        <div id="main-infor-display">
             <div class="aircraft-info">
                <div></div>
        <div></div><div> <img src={choosed_aircraft["General Information"]["aircraft_image"][1]} alt= "plane image" class="aircraft-image"/> <img src={choosed_aircraft["General Information"]["aircraft_image"][0]}  class="aircraft-image"></img></div><div class="details">
            <h3>General Information</h3>
            <ul>
            <li>First Flight: <span class="data-value">{choosed_aircraft["General Information"]["First Flight"]}</span></li>
            <li>Model Build: <span class="data-value">{choosed_aircraft["General Information"]["Model Build"]}</span></li>
            <li>Entered Service: <span class="data-value">{choosed_aircraft["General Information"]["Entered Service"]}</span></li>
            <li>Type: <span class="data-value">{choosed_aircraft["General Information"]["Type"]}</span></li>
            <li>Engine Type: <span class="data-value">{choosed_aircraft["General Information"]["Engine Type"]}</span></li>
            <li>Number of engines: <span class="data-value">{choosed_aircraft["General Information"]["number of engines"]}</span></li> <li>Price tag: <span class="data-value">{choosed_aircraft["General Information"]["price"]}</span></li>
            <li>Fly range category: <span class="data-value">{choosed_aircraft["General Information"]["Fly range category"]}</span></li>
            <li>Seat config: <span class="data-value">{choosed_aircraft["General Information"]["seat config"][0]}</span></li> ```
            </ul>
        </div>
        <div class="details">
            <h3>Dimensions (m)</h3>
            <ul>
            <li>Length: <span class="data-value">{choosed_aircraft["Dimensions"]["Length"]}</span></li>
            <li>Wingspan: <span class="data-value">{choosed_aircraft["Dimensions"]["Wingspan"]}</span></li>
            <li>Cabin Length: <span class="data-value">{choosed_aircraft["Dimensions"]["Cabin Length"]}</span></li>
            <li>Fuselage Max Diameter: <span class="data-value">{choosed_aircraft["Dimensions"]["Fuselage Max Diameter"]}</span></li>
            <li>Max Cabin Width: <span class="data-value">{choosed_aircraft["Dimensions"]["Max Cabin Width"]}</span></li>
            </ul>
        </div>
        <div class="aircraft-info">


  <div class="details">
    <h3>Weights (tons)</h3>
    <ul>
      <li>Max Landing Weight: <span class="data-value">{choosed_aircraft["Weights"]["Max Landing Weight"]}</span></li>
      <li>Empty Weight: <span class="data-value">{choosed_aircraft["Weights"]["Empty Weight"]}</span></li>
      <li>Max Takeoff Weight: <span class="data-value">{choosed_aircraft["Weights"]["Max Takeoff Weight"]}</span></li>
    </ul>
  </div>

  <div class="details" id="performance">
    <h3>Performance</h3>
    <ul>
      <li>Fuel Capacity (kg): <span class="data-value">{choosed_aircraft["Performance"]["Fuel Capacity"]}</span></li>
      <li>Range (nautical miles): <span class="data-value">{choosed_aircraft["Performance"]["Range"]}</span></li>
      <li>Flight Ceiling (feet): <span class="data-value">{choosed_aircraft["Performance"]["Flight Ceiling"]}</span></li>
      <li>Takeoff Distance (m): <span class="data-value">{choosed_aircraft["Performance"]["Takeoff Distance"]}</span></li>
      <li>Landing Distance (m): <span class="data-value">{choosed_aircraft["Performance"]["Landing Distance"]}</span></li>
      <li>Passenger Capacity (max): <span class="data-value">{choosed_aircraft["Performance"]["Passenger Capacity"]["Max"]}</span></li>
      <li>Passenger Capacity (typical): <span class="data-value">{choosed_aircraft["Performance"]["Passenger Capacity"]["Typical"]}</span></li>
      <li>Cargo Capacity (m): <span class="data-value">25</span></li>
      <li>Avionics: <span class="data-value">Common suite: {choosed_aircraft["Performance"]["Avionics"]["Common Suite"]}, FMS: {choosed_aircraft["Performance"]["Avionics"]["FMS"]}, EFIS: {choosed_aircraft["Performance"]["Avionics"]["EFIS"]}, AFCS: {choosed_aircraft["Performance"]["Avionics"]["AFCS"]}, TAWS: {choosed_aircraft["Performance"]["Avionics"]["TAWS"]}, HUD: {choosed_aircraft["Performance"]["Avionics"]["HUD"]}</span></li>
    </ul>
  </div>
        </div>
           

  <div class="details">
    <h3>Speed (knots)</h3>
    <ul>
      {/* <li>Cruise Speed (Mach): <span class="data-value">{choosed_aircraft["Performance"]["Speed"]["Mach"]}</span></li> */}
      <li>Cruise Speed (Knots): <span class="data-value">{choosed_aircraft["Speed"]["Cruise Speed"]["Knots"]}</span></li>
      {/* <li>Max Speed (Mach): <span class="data-value">{choosed_aircraft["Performance"]["Speed"]["Mach"]}</span></li> */}
      <li>Max Speed (Knots): <span class="data-value">{choosed_aircraft["Speed"]["Max Speed"]["Knots"]}</span></li>
      <li>V2 speed: <span class="data-value">{choosed_aircraft["Speed"]["V2 speed"]}</span></li>
      <li>Stall speed: <span class="data-value">{choosed_aircraft["Speed"]["Stall speed"]}</span></li>
    </ul>
  </div>

  <div class="details">
  <h3>Engines</h3>
  <table>
    <thead>
      <tr id="collumns-engines">
        <th>Engine Model</th>
        <th>Manufacturer</th>
        <th>Thrust (lbf)</th>
        <th>Bypass Ratio</th>
        <th>Fan Stage</th>
        <th>Low-Pressure Compressor Stages</th>
        <th>High-Pressure Compressor Stages</th>
        <th>High-Pressure Turbine Stages</th>
        <th>Low-Pressure Turbine Stages</th>
      </tr>
    </thead>
    <tbody id="collumns-engine-valuess">
        {Engines_data.map((single_engine) =>       
        <tr>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Model"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Manufacturer"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Thrust"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Bypass ratio"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Fan stage"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Low-pressure compressor stages"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["High-pressure compressor stages"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["High-pressure turbine stages"])}</td>
        <td>{String(choosed_aircraft["Engines"][single_engine]["Low-pressure turbine stages"])}</td>
      </tr>)}
      </tbody>
  </table>
</div>

  <div class="details">
    <h3>Other Details</h3>
    <ul>
      <li>Noise Levels (Takeoff): <span class="data-value">{choosed_aircraft["Other Details"]["Noise Levels"]["Takeoff"]}</span></li>
      <li>Noise Levels (Landing): <span class="data-value">{choosed_aircraft["Other Details"]["Noise Levels"]["Landing"]}</span></li>
      <li>Noise Levels (Cruise): <span class="data-value">{choosed_aircraft["Other Details"]["Noise Levels"]["Cruise"]}</span></li>
      <li>Operation Cost: <span class="data-value">{choosed_aircraft["Other Details"]["Noise Levels"]["Operation Cost"]}</span></li>
      {/* <li>Certification Standards: <span class="data-value">{choosed_aircraft["Other Details"]["Certification Standards"][0]} , {choosed_aircraft["Other Details"]["Certification Standards"][1]}</span></li> */}
      <li>Body Type: <span class="data-value">{choosed_aircraft["Other Details"]["Body Type"]}</span></li>
      <li>Number of Decks: <span class="data-value">{choosed_aircraft["Other Details"]["Number of Decks"]}</span></li>
      <li>Fuselage Material: <span class="data-value">{choosed_aircraft["General Information"]["Manufacturer"] === "Airbus" ? choosed_aircraft["Other Details"]["Materials"]["Fuselage"]["Material"] :choosed_aircraft["Other Details"]["Materials"].Fuselage}</span></li>
      <li>Wings Material: <span class="data-value">{choosed_aircraft["General Information"]["Manufacturer"] === "Airbus" ? choosed_aircraft["Other Details"]["Materials"]["Wings"]["Material"] :choosed_aircraft["Other Details"]["Materials"].Wings}</span></li>
      <li>Commercial Operators: <span class="data-value"><ul>{com_operaters.map((elements) => <li><h4>{elements} </h4></li>)}</ul></span></li>
    </ul>
  </div>
</div>

    </div>
        <div className="bottom-end"></div>
    </>
    )
}

export default NewPage;