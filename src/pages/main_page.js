import React, { useState } from "react";
import "../index.css"
import { airplane_comercial } from "../data/airplane_com";
import search_icon from "../images/74-742441_preamps-white-search-icon-svg-removebg-preview.png"
import { useNavigate } from 'react-router-dom';

let searchInput;
var list_planes = [
    'Airbus A220-100',    'Airbus A220-300',
    'Airbus A300',        'Airbus A310',
    'Airbus A318',        'Airbus A319',
    'Airbus A320',        'Airbus A320neo',
    'Airbus A321',        'Airbus A321neo',
    'Airbus A321XLR',     'Airbus A330-200',
    'Airbus A330-200F',   'Airbus A330-300',
    'Airbus A330-800neo', 'Airbus A330-900neo',
    'Airbus A340-200',    'Airbus A340-300',
    'Airbus A340-500',    'Airbus A340-600',
    'Airbus A350-900',    'Airbus A350-1000',
    'Airbus A350 XWB',    'Airbus A380-800',
    'Airbus A380F',       'Airbus Beluga',  
    'Boeing 247',     'Boeing 707',
    'Boeing 717',     'Boeing 727',
    'Boeing 737-100', 'Boeing 737-200',
    'Boeing 737-300', 'Boeing 737-400',
    'Boeing 737-500', 'Boeing 737-600',
    'Boeing 737-700', 'Boeing 737-800',
    'Boeing 737-900', 'Boeing 737 MAX',
    'Boeing 747-100', 'Boeing 747-200',
    'Boeing 747-400', 'Boeing 747-8',
    'Boeing 757',     'Boeing 767-200',
    'Boeing 767-300', 'Boeing 767-400ER',
    'Boeing 787-8',   'Boeing 787-9',
    'Boeing 787-10'
  ]

function searchStrings(list, searchString) {
    const regex = new RegExp(searchString, 'g');
    const filteredList = list.filter(item => regex.test(item));
    return filteredList;
}

function Main_page() {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [searchInput_regex, setSearchInput_regex] = useState("");
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        console.log(searchInput);
    };

    const handleSearchButtonClick = () => {
        console.log(searchInput);
        setSearchInput_regex((prev) => prev = searchInput)
        console.log(searchStrings(list_planes, String(searchInput_regex)));
        navigate("/search")
        
    };

    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-bar-brand">
                    <a href="/">  {/* Link the brand to your desired URL */}
                        <h1>AEROTECH</h1>
                    </a>
                </div>
                <div className="search-bar-container">
                    <input type="text" className="search-bar" placeholder="Search..." value={searchInput} onChange={handleSearchInput} />
                    <button onClick={handleSearchButtonClick}>
                        <img id="search_icon" src={search_icon}></img>
                    </button>
                </div>
            </nav>
            <div id="main-image-section">
                <img id="main-image" src="https://th.bing.com/th/id/R.6742a4c9fbc0296f0dda0f6ccdaf4e53?rik=BALM3KZLkVukGA&riu=http%3a%2f%2fbest-wallpaper.net%2fwallpaper%2f2560x1440%2f1408%2fAirbus-A340-aircraft-front-view-airport_2560x1440.jpg&ehk=92xpRQYyhIshWEYnA5iEremy6iGSt9N9DRjlHKwYucA%3d&risl=&pid=ImgRaw&r=0"></img>
            </div>
            <div id="ain_containerm">
                <h1>About this page</h1>
                <p>Search input: {searchInput}</p>
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