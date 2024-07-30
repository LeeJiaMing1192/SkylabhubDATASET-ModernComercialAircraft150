import React, {useEffect, useState } from "react";
import "../index.css"
import { airplane_comercial } from "../data/deatailed_aircraft_prod";
import search_icon from "../images/74-742441_preamps-white-search-icon-svg-removebg-preview.png"
import { useNavigate } from 'react-router-dom';
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import { useContext } from 'react';
import MyContext from '../MyContext';

console.log(airplane_comercial["Boeing 747-100"])
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
    if(searchString != "all"){
        const regex = new RegExp(searchString, 'i');
        const filteredList = list.filter(item => regex.test(item));
        return filteredList;
    }
    else{
        const filteredList = list_planes
        return filteredList;
    }
}





function Main_page() {
    const navigate = useNavigate();
    const { data, updateData } = useContext(MyContext);
    const { searched_planes_data, update_searched_data } = useContext(MyContext);
    const [searchInput, setSearchInput] = useState(searched_planes_data);
    const [aircraft_result , setaircraft_result] = useState([])


    const [searchInput_regex, setSearchInput_regex] = useState("");
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        // console.log(searchInput);
    };


    const [manufacturerFilter, setManufacturerFilter] = useState("");
    const [lengthFilter_smallest, setLengthFilter_smallest] = useState(null); // Can be null initially
    const [lengthFilter_largest, setLengthFilter_largest] = useState(null); // Can be null initially
    const [capacityFilter_smallest, setCapacityFilter_smallest] = useState(null); // Can be null initially
    const [capacityFilter_largest, setCapacityFilter_largest] = useState(null); // Can be null initially
    const [rangeFilter_smallest, setRangeFilter_smallest] = useState(null); // Can be null initially
    const [rangeFilter_largest, setRangeFilter_largest] = useState(null); // Can be null initially
    const [cockpitCrewFilter, setCockpitCrewFilter] = useState(null); // Can be null initially
    const [bodyTypeFilter, setBodyTypeFilter] = useState("");
    const [numDecksFilter, setNumDecksFilter] = useState("");
 
    const handleSearchButtonClick = () => {
        // console.log(searchInput);
        setaircraft_result((prev_saircraft) =>prev_saircraft =  searchStrings(list_planes, String(searchInput)))
        // console.log(searchStrings(list_planes, String(searchInput)));


        
    };
    useEffect(() => {
      handleSearchButtonClick();
      }, []);
    const Navigate_planepage = (element_navigate) => {
      update_searched_data(String(searchInput))
      updateData(String(element_navigate))
      navigate(`/new-page/${element_navigate}`);
    }
    return ( 
        <div>
            <nav className="nav-bar">
                <div className="nav-bar-brand">
                  <img id="menu-logo" src={Menu_logo}></img>
                    <img id="logo-image" src={Com_logo}></img>
                    <h2>Skylab</h2>
                </div>
                  <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Search..." value={searchInput} onChange={handleSearchInput} />
    
                  
       
                    <div id="search-icon-container">
                    <img id="search_icon"  onClick={handleSearchButtonClick} src={search_icon}></img>
                    </div>
                </div>
            </nav>
            <div id="search-container">
    
            <div id="main-search-section">
                {aircraft_result.map((element) => 
                <div>
                    <div class="search-result" id={element} onClick={() => Navigate_planepage(element)}>
                        <h4>{element}</h4>
                        <img src={airplane_comercial[String(element)]["General Information"]["aircraft_image"]} alt="Airbus A320"/>
                        <ul>
                        <li><i class="fas fa-plane"></i> <h2>Company: {airplane_comercial[element]["main_manufacturer"]}</h2></li>
                            <li><i class="fas fa-plane"></i> Length: {airplane_comercial[element]["Dimensions"]["Length"]} meters</li>
                            <li><i class="fas fa-rocket"></i> Wingspan: {airplane_comercial[element]["Dimensions"]["Wingspan"]}</li>
                            <li><i class="fas fa-users"></i> Passenger Capacity: 150-200</li>
                        </ul>
                        </div>
                </div>)
            }
            </div>
            </div>
          
        </div>
    );
}

// Define a function to return the searchInput value
function getSearchInput() {
    return searchInput;
}

// Export the getSearchInput function
export const getSearchInput_exp = getSearchInput;

// Export the Main_page component
export default Main_page;