import React, {useEffect, useState } from "react";
import { airplane_comercial } from "../browser_cache/deatailed_aircraft_prod";
import search_icon from "../images/74-742441_preamps-white-search-icon-svg-removebg-preview.png"
import { useNavigate } from 'react-router-dom';
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import { useContext } from 'react';
import MyContext from '../MyContext';
import "../comparison_detailed_style.css"


let searchInput;
var list_planes =[
    'Airbus A220-100',
    'Airbus A220-300',
    'Airbus A300B2-100',
    'Airbus A300B4-100',
    'Airbus A300-600',
    'Airbus A310-200',
    'Airbus A310-300',
    'Airbus A318',
    'Airbus A319',
    'Airbus A319neo',
    'Airbus A320',
    'Airbus A320neo',
    'Airbus A321-100',
    'Airbus A321-200',
    'Airbus A321LR',
    'Airbus A321neo',
    'Airbus A321XLR',
    'Airbus A330-200F',
    'Airbus A330-300',
    'Airbus A330-800neo',
    'Airbus A330-900neo',
    'Airbus A340-200',
    'Airbus A340-300',
    'Airbus A340-500',
    'Airbus A340-600',
    'Airbus A350-800',
    'Airbus A350-900',
    'Airbus A350-1000',
    'Airbus A380-800',
    'Airbus A380-900',
    'Airbus A380F',
    'Airbus BelugaXL',
    'Airbus BelugaST',
    'Boeing 247D',
    'Boeing 307 Stratoliner',
    'Boeing 707-138',
    'Boeing 707-320',
    'Boeing 707-20B',
    'Boeing 707-100B',
    'Boeing 717-100',
    'Boeing 717-200',
    'Boeing 727-100',
    'Boeing 727-200',
    'Boeing 737-100',
    'Boeing 737-200',
    'Boeing 737-300',
    'Boeing 737-400',
    'Boeing 737-500',
    'Boeing 737-600',
    'Boeing 737-700',
    'Boeing 737-800',
    'Boeing 737-900',
    'Boeing 737 MAX',
    'Boeing 747-100',
    'Boeing 747-200',
    'Boeing 747-300',
    'Boeing 747-400',
    'Boeing 747-400F',
    'Boeing 747-400D',
    'Boeing 747-400ER',
    'Boeing 747-8',
    'Boeing 757-200',
    'Boeing 757-200F',
    'Boeing 757-300',
    'Boeing 767-200',
    'Boeing 757-200ER',
    'Boeing 767-300',
    'Boeing 767-300ER',
    'Boeing 767-400',
    'Boeing 767-400ER',
    'Boeing 777-200',
    'Boeing 777-200ER',
    'Boeing 777-200LR',
    'Boeing 777-300',
    'Boeing 777-300ER',
    'Boeing 777-200F',
    'Boeing 777-9',
    'Boeing 787-8 Dreamliner',
    'Boeing 787-9 Dreamliner'
 
  ]

  
function searchStrings(list, searchString) {
    const filteredList = []
    if(searchString != "all" || searchString != ""){
        const regex = new RegExp(searchString, 'i');
        const filteredList = list.filter(item => regex.test(item));
        return filteredList;
    }
    else{
        const filteredList = list_planes
        return filteredList;
    }
}
function extractNumber(str) {
    // Extract the number using a regular expression
    const match = str.match(/\d+/);
  
    // If a number is found, remove commas and convert to integer
    if (match) {
      return parseInt(match[0].replace(',', ''), 10);
    } else {
      return null; // Handle cases where no number is found
    }
  }
  


const Comparison_detailed_page = () => {

    const navigate = useNavigate();
    const { data, updateData } = useContext(MyContext);
    const {compare_plane_choosed_1,update_compare_plane_1 } = useContext(MyContext)

    var aircraft_1_engine = Object.keys(airplane_comercial[compare_plane_choosed_1[0]]["Engines"])
    console.log(compare_plane_choosed_1["Engines"])
    var aircraft_2_engine = Object.keys(airplane_comercial[compare_plane_choosed_1[1]]["Engines"])
    const [searchInput, setSearchInput] = useState("");
    const [searchInput_2, setSearchInput_2] = useState("");
    const [choosed_engine_option_1 , setChoosed_engine_option_1] = useState(aircraft_1_engine[0])
    const [choosed_engine_option_2, setChoosed_engine_option_2] = useState(aircraft_2_engine[0])
    var comparing_keys
    const [searchInput_regex, setSearchInput_regex] = useState("");

    
    const go_back_search = () =>{
      navigate("/search")
  }   
    const dimension_data = [
      { comparisonValue: 'Length', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Dimensions"]["Length"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Dimensions"]["Length"] },
      { comparisonValue: 'Wingspan', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Dimensions"]["Wingspan"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Dimensions"]["Wingspan"] },
      { comparisonValue: 'Cabin Length', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Dimensions"]["Cabin Length"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Dimensions"]["Cabin Length"] },
      { comparisonValue: 'Fuselage diameter', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Dimensions"]["Fuselage Max Diameter"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Dimensions"]["Fuselage Max Diameter"] },
      { comparisonValue: 'Cabin diameter', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Dimensions"]["Max Cabin Width"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Dimensions"]["Max Cabin Width"] },
    ];
    
    const weigth_data = [
      { comparisonValue: 'MLW', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Weights"]["Max Landing Weight"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Weights"]["Max Landing Weight"] },
      { comparisonValue: 'Empty weight', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Weights"]["Empty Weight"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Weights"]["Empty Weight"] },
      { comparisonValue: 'MTW', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Weights"]["Max Takeoff Weight"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Weights"]["Max Landing Weight"] },
    ]
    const performance_data = [
      { comparisonValue: 'Fuel capacity', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Fuel Capacity"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Fuel Capacity"] },
      { comparisonValue: 'Range', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Range"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Range"] },
      { comparisonValue: 'Max Speed', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Speed"]["Max Speed"]["Knots"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Speed"]["Max Speed"]["Knots"] },
      { comparisonValue: 'Cruise Speed', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Speed"]["Cruise Speed"]["Knots"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Speed"]["Cruise Speed"]["Knots"] },
      { comparisonValue: 'Takeoff Speed', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Speed"]["V2 speed"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Speed"]["V2 speed"] },
      { comparisonValue: 'Stall Speed', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Speed"]["Stall speed"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Speed"]["Stall speed"] },

      { comparisonValue: 'Flight ceiling', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Flight Ceiling"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Flight Ceiling"] },
      { comparisonValue: 'Takeoff distance', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Takeoff Distance"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Takeoff Distance"] },
      { comparisonValue: 'Landing distance', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Landing Distance"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Landing Distance"] },
      { comparisonValue: 'Max pax capacity', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Passenger Capacity"]["Max"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Passenger Capacity"]["Max"] },

    ]

    const avionics_data = [
      { comparisonValue: 'FMS', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["FMS"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["FMS"] },
      { comparisonValue: 'EFIS', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["EFIS"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["EFIS"] },
      { comparisonValue: 'AFCS', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["AFCS"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["AFCS"] },
      { comparisonValue: 'TAWS', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["TAWS"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["TAWS"] },
      { comparisonValue: 'HUD', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["HUD"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["HUD"] },
      { comparisonValue: 'Common Suite', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Performance"]["Avionics"]["Common Suite"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Performance"]["Avionics"]["Common Suite"] },

    ]


    const engine_data = [
      { comparisonValue: 'Manufacturer', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Manufacturer"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Manufacturer"] },
      { comparisonValue: 'Model', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Model"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Model"] },
      { comparisonValue: 'Thrust', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Thrust"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Thrust"] },
      { comparisonValue: 'Bypass ratio', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Bypass ratio"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Bypass ratio"] },
      { comparisonValue: 'Fan stage', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Fan stage"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Fan stage"] },
      { comparisonValue: 'Low-pressure compressor stages', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Low-pressure compressor stages"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Low-pressure compressor stages"] },
      { comparisonValue: 'High-pressure compressor stages', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["High-pressure compressor stages"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["High-pressure compressor stages"] },
      { comparisonValue: 'High-pressure turbine stages', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["High-pressure turbine stages"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["High-pressure turbine stages"] },
      { comparisonValue: 'Low-pressure turbine stages', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Low-pressure turbine stages"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Low-pressure turbine stages"] },
      { comparisonValue: 'Fan Diameter', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Fan blade diameter"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Fan blade diameter"] },
      { comparisonValue: 'Max climb rate', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Climb rate"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Climb rate"] },
      { comparisonValue: 'Cruise climb rate', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Cruise climb rate"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Cruise climb rate"] },
      { comparisonValue: 'Max descend rate', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Descend rate"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Descend rate"] },
      { comparisonValue: 'Landing descend rate', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Landing descend rate"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Landing descend rate"] },
      { comparisonValue: 'Fuel type', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Fuel type"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Fuel type"] },
      { comparisonValue: 'Pressure ratio', subject1: airplane_comercial[compare_plane_choosed_1[0]]["Engines"][choosed_engine_option_1]["Pressure ratio"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["Engines"][choosed_engine_option_2]["Pressure ratio"] },


    ]

    const general_data = [
      { comparisonValue: 'Plane Manufacturer', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Manufacturer"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Manufacturer"] },
      { comparisonValue: 'Family', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Family"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Family"] },
      { comparisonValue: 'First flight', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["First Flight"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["First Flight"] },
      { comparisonValue: 'Models Built', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Model Build"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Model Build"] },
      { comparisonValue: 'Entered Service"', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Entered Service"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Entered Service"] },
      { comparisonValue: 'Body type', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Type"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Type"] },
      { comparisonValue: 'Number of engines', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["number of engines"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["number of engines"] },
      // { comparisonValue: 'Price Tag', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Manufacturer"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Manufacturer"] },
      { comparisonValue: 'Range category', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["Fly range category"], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["Fly range category"] },
      { comparisonValue: 'Seat configuration', subject1: airplane_comercial[compare_plane_choosed_1[0]]["General Information"]["seat config"][0], subject2: airplane_comercial[compare_plane_choosed_1[1]]["General Information"]["seat config"][0] },

    ]
   
    const choosed_engine_option_1_function = (engine) => {
      setChoosed_engine_option_1(engine)
    }

    const choosed_engine_option_2_function = (engine) => {
      setChoosed_engine_option_2(engine)
    }
    const go_back_about = () =>{
        updateData(String("all"))
        navigate("/about")
    }   
 
    return(
        <>
            <nav className="nav-bar">   
                <div className="nav-bar-brand" onClick={() => go_back_search()}>
                  {/* <img id="menu-logo" src={Menu_logo}></img> */}
           
                  <img id="logo-image" src={Com_logo}></img>
                    <h2>Skylab</h2>
             
                </div>
        
                {/* <h3 className="about_creator_text"><b>V1.4.2</b></h3> */}
           
            </nav>
    
            <table className="comparison-table">
      <thead>
        <tr>
          <th id="compare-value-display">Comparison Value</th>
          <th className="plane_compare_title">{compare_plane_choosed_1[0]}</th>
          <th className="plane_compare_title">{compare_plane_choosed_1[1]}</th>
        </tr>
      </thead>
      <tbody>  
      {compare_plane_choosed_1.length > 0 && (
          <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">General info</span>
            </td>
          </tr>
        )}   
         {general_data.map((row, index) => (
          <tr key={index}>
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}
        {compare_plane_choosed_1.length > 0 && (
          <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">Dimensions</span>
            </td>
          </tr>
        )}

        
        {/* Massive Dimension text (optional) */}
   
        {/* Other categories section */}
        {dimension_data.map((row, index) => (
          <tr key={index}>
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}
   <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">weight</span>
            </td>
          </tr>
        {weigth_data.map((row, index) => (
          <tr key={index} className="dimension-row">
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}
   <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">Performance</span>
            </td>
          </tr>
          {performance_data.map((row, index) => (
          <tr key={index} className="dimension-row">
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}

      <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">Avionics</span>
            </td>
          </tr>
          {avionics_data.map((row, index) => (
          <tr key={index} className="dimension-row">
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}
    <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">Engine options</span>
            </td>
          </tr>
          <tr className="dimension-row">
            <td>Options</td>
            <td className="engine-option-container">
              {aircraft_1_engine.map((element) => <div id={element} onClick={() => choosed_engine_option_1_function(element) }>{element}</div>)}
            </td>
            <td className="engine-option-container">
              {aircraft_2_engine.map((element2) => <div id={element2} onClick={() => choosed_engine_option_2_function(element2)}>{element2}</div>)}
            </td>
          </tr>

          <tr className="dimension-separator">
            <td colSpan="3">
              <span className="massive-dimension-text">Engine Specs</span>
            </td>
          </tr>
          {engine_data.map((row, index) => (
          <tr key={index} className="dimension-row">
            <td>{row.comparisonValue}</td>
            <td>{row.subject1}</td>
            <td>{row.subject2}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
    );
}


export default Comparison_detailed_page;