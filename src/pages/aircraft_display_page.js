
import React from "react";
import {useState, useNavigate} from "react"
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import "../displaypage.css"
import { useContext } from 'react';
import MyContext from '../MyContext';
import { airplane_comercial } from "../data/deatailed_aircraft_prod";


// console.log(sharedData)
function NewPage(){
    const { data, updateData } = useContext(MyContext);
    var Engines_data = Object.keys(airplane_comercial[data]["Engines"])
    console.log(data)
    return(
        <>
            <nav className="nav-bar">
                <div className="nav-bar-brand">
                    <img id="menu-logo" src={Menu_logo}></img>
                    <img id="logo-image" src={Com_logo}></img>
                    <h2>Skylab</h2>
                </div>
            </nav>
        <div id="main-infor-display">
             <div class="aircraft-info">
                <div className="aircraft-name-container">
                <h1>{data}</h1>
                </div>
         <img src={airplane_comercial[data]["General Information"]["aircraft_image"][0]} alt= "plane image" class="aircraft-image"/> <div class="details">
            <h3>General Information</h3>
            <ul>
            <li>First Flight: <span class="data-value">{airplane_comercial[data]["General Information"]["First Flight"]}</span></li>
            <li>Model Build: <span class="data-value">{airplane_comercial[data]["General Information"]["Model Build"]}</span></li>
            <li>Entered Service: <span class="data-value">{airplane_comercial[data]["General Information"]["Entered Service"]}</span></li>
            <li>Type: <span class="data-value">{airplane_comercial[data]["General Information"]["Type"]}</span></li>
            <li>Engine Type: <span class="data-value">{airplane_comercial[data]["General Information"]["Engine Type"]}</span></li>
            <li>Number of engines: <span class="data-value">{airplane_comercial[data]["General Information"]["Number of engine"]}</span></li> <li>Price tag: <span class="data-value">{airplane_comercial[data]["General Information"]["Price tag"]}</span></li>
            <li>Fly range category: <span class="data-value">{airplane_comercial[data]["General Information"]["Fly range category"]}</span></li>
            <li>Seat config: <span class="data-value">{airplane_comercial[data]["General Information"]["seat config"][0]}</span></li> ```
            </ul>
        </div>
        <div class="details">
            <h3>Dimensions (m)</h3>
            <ul>
            <li>Length: <span class="data-value">{airplane_comercial[data]["Dimensions"]["Length"]}</span></li>
            <li>Wingspan: <span class="data-value">{airplane_comercial[data]["Dimensions"]["Wingspan"]}</span></li>
            <li>Cabin Length: <span class="data-value">{airplane_comercial[data]["Dimensions"]["Cabin Length"]}</span></li>
            <li>Fuselage Max Diameter: <span class="data-value">{airplane_comercial[data]["Dimensions"]["Fuselage Max Diameter"]}</span></li>
            <li>Max Cabin Width: <span class="data-value">{airplane_comercial[data]["Dimensions"]["Max Cabin Width"]}</span></li>
            </ul>
        </div>
        <div class="aircraft-info">


  <div class="details">
    <h3>Weights (tons)</h3>
    <ul>
      <li>Max Landing Weight: <span class="data-value">{airplane_comercial[data]["Weights"]["Max Landing Weight"]}</span></li>
      <li>Empty Weight: <span class="data-value">{airplane_comercial[data]["Weights"]["Empty Weight"]}</span></li>
      <li>Max Takeoff Weight: <span class="data-value">{airplane_comercial[data]["Weights"]["Max Takeoff Weight"]}</span></li>
    </ul>
  </div>

  <div class="details" id="performance">
    <h3>Performance</h3>
    <ul>
      <li>Fuel Capacity (kg): <span class="data-value">{airplane_comercial[data]["Performance"]["Fuel Capacity"]}</span></li>
      <li>Range (nautical miles): <span class="data-value">{airplane_comercial[data]["Performance"]["Range"]}</span></li>
      <li>Flight Ceiling (feet): <span class="data-value">{airplane_comercial[data]["Performance"]["Flight Ceiling"]}</span></li>
      <li>Takeoff Distance (m): <span class="data-value">{airplane_comercial[data]["Performance"]["Takeoff Distance"]}</span></li>
      <li>Landing Distance (m): <span class="data-value">{airplane_comercial[data]["Performance"]["Landing Distance"]}</span></li>
      <li>Passenger Capacity (max): <span class="data-value">{airplane_comercial[data]["Performance"]["Passenger Capacity"]["Max"]}</span></li>
      <li>Passenger Capacity (typical): <span class="data-value">{airplane_comercial[data]["Performance"]["Passenger Capacity"]["Typical"]}</span></li>
      <li>Cargo Capacity (m): <span class="data-value">25</span></li>
      <li>Avionics: <span class="data-value">Common suite: {airplane_comercial[data]["Performance"]["Avionics"]["Common Suite"]}, FMS: {airplane_comercial[data]["Performance"]["Avionics"]["FMS"]}, EFIS: {airplane_comercial[data]["Performance"]["Avionics"]["EFIS"]}, AFCS: {airplane_comercial[data]["Performance"]["Avionics"]["AFCS"]}, TAWS: {airplane_comercial[data]["Performance"]["Avionics"]["TAWS"]}, HUD: {airplane_comercial[data]["Performance"]["Avionics"]["HUD"]}</span></li>
    </ul>
  </div>
        </div>
           

  <div class="details">
    <h3>Speed (knots)</h3>
    <ul>
      {/* <li>Cruise Speed (Mach): <span class="data-value">{airplane_comercial[data]["Performance"]["Speed"]["Mach"]}</span></li> */}
      <li>Cruise Speed (Knots): <span class="data-value">{airplane_comercial[data]["Speed"]["Cruise Speed"]["Knots"]}</span></li>
      {/* <li>Max Speed (Mach): <span class="data-value">{airplane_comercial[data]["Performance"]["Speed"]["Mach"]}</span></li> */}
      <li>Max Speed (Knots): <span class="data-value">{airplane_comercial[data]["Speed"]["Max Speed"]["Knots"]}</span></li>
      <li>V2 speed: <span class="data-value">{airplane_comercial[data]["Speed"]["V2 speed"]}</span></li>
      <li>Stall speed: <span class="data-value">{airplane_comercial[data]["Speed"]["Stall speed"]}</span></li>
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
        <td>{airplane_comercial[data]["Engines"][single_engine]["Model"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Manufacturer"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Thrust"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Bypass Ratio"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Fan Stage"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Low-pressure Compressor Stages"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["High-pressure Compressor Stages"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["High-pressure Turbine Stages"]}</td>
        <td>{airplane_comercial[data]["Engines"][single_engine]["Low-pressure Turbine Stages"]}</td>
      </tr>)}
      </tbody>
  </table>
</div>

  <div class="details">
    <h3>Other Details</h3>
    <ul>
      <li>Noise Levels (Takeoff): <span class="data-value"></span></li>
      <li>Noise Levels (Landing): <span class="data-value">85 dB</span></li>
      <li>Noise Levels (Cruise): <span class="data-value">80 dB</span></li>
      <li>Operation Cost: <span class="data-value">$10 million</span></li>
      <li>Certification Standards: <span class="data-value">FAA, EASA</span></li>
      <li>Body Type: <span class="data-value">Narrow-body</span></li>
      <li>Number of Decks: <span class="data-value">1</span></li>
      <li>Fuselage Material: <span class="data-value">Aluminium</span></li>
      <li>Wings Material: <span class="data-value">Aluminium</span></li>
      <li>Commercial Operators: <span class="data-value">American Airlines, United Airlines, EasyJet, Delta Air Lines</span></li>
    </ul>
  </div>
</div>

    </div>
        <div className="bottom-end"></div>
    </>
    )
}

export default NewPage;