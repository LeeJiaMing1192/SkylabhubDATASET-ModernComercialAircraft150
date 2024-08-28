import React, {useEffect, useState } from "react";
import "../index.css"
import { airplane_comercial } from "../browser_cache/deatailed_aircraft_prod";
import search_icon from "../images/74-742441_preamps-white-search-icon-svg-removebg-preview.png"
import { useNavigate } from 'react-router-dom';
import Com_logo from "../images/OIG4.vG4omE6g-removebg-preview.png"
import Menu_logo from "../images/menu_2.png"
import { useContext } from 'react';
import MyContext from '../MyContext';
import compare_icon from "../images/169-1698432_scale-icon-white-transparent-removebg-preview.png"
import remove_button from "../images/remove_button.png"
import { Helmet } from 'react-helmet';
let searchInput;
var list_planes =['Airbus A220-100','Airbus A220-300' ,'Airbus A300B2-100', 'Airbus A300B4-100', 'Airbus A300-600', 'Airbus A310-200', 'Airbus A310-300', 'Airbus A318', 'Airbus A319', 'Airbus A319neo', 'Airbus A320', 'Airbus A320neo', 'Airbus A321-100', 'Airbus A321-200', 'Airbus A321LR', 'Airbus A321neo', 'Airbus A321XLR', 'Airbus A330-200F', 'Airbus A330-300', 'Airbus A330-800neo', 'Airbus A330-900neo', 'Airbus A340-200', 'Airbus A340-300', 'Airbus A340-500', 'Airbus A340-600', 'Airbus A350-800', 'Airbus A350-900', 'Airbus A350-1000', 'Airbus A380-800', 'Airbus A380-900', 'Airbus A380F', 'Airbus BelugaXL', 'Airbus BelugaST', 'Boeing 247D', 'Boeing 307 Stratoliner', 'Boeing 707-138', 'Boeing 707-320', 'Boeing 707-20B', 'Boeing 707-100B', 'Boeing 717-100', 'Boeing 717-200', 'Boeing 727-100', 'Boeing 727-200', 'Boeing 737-100', 'Boeing 737-200', 'Boeing 737-300', 'Boeing 737-400', 'Boeing 737-500', 'Boeing 737-600', 'Boeing 737-700', 'Boeing 737-800', 'Boeing 737-900', 'Boeing 737 MAX', 'Boeing 747-100', 'Boeing 747-200', 'Boeing 747-300', 'Boeing 747-400', 'Boeing 747-400F', 'Boeing 747-400D', 'Boeing 747-400ER', 'Boeing 747-8', 'Boeing 757-200', 'Boeing 757-200F', 'Boeing 757-300', 'Boeing 767-200', 'Boeing 757-200ER', 'Boeing 767-300', 'Boeing 767-300ER', 'Boeing 767-400', 'Boeing 767-400ER', 'Boeing 777-200', 'Boeing 777-200ER', 'Boeing 777-200LR', 'Boeing 777-300', 'Boeing 777-300ER', 'Boeing 777-200F', 'Boeing 777-9', 'Boeing 787-8 Dreamliner', 'Boeing 787-9 Dreamliner', 'DC-8-10', 'DC-8-20', 'DC-8-30', 'DC-8-40', 'DC-8-50', 'DC-8 Super 60', 'DC-8-70', 'DC-9-10', 'DC-9-20', 'DC-9-30', 'DC-9-40', 'DC-9-50', 'DC-10-10', 'DC-10-15', 'DC-10-30', 'DC-10-40', 'MD-81', 'MD-82', 'MD-83', 'MD-87', 'MD-88', 'MD-90-30', 'MD-90-30ER', 'MD-11', 'MD-11F', 'MD-11C', 'MD-11CF', 'MD-11ER' , "ATR-42-300" , "ATR-42-500" , "ATR-42-600" , "ATR-42-600S" , "ATR-72-200"  , "ATR-72-210" , "ATR-72-500" , "ATR-72-600"]

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





function Main_page() {
    const navigate = useNavigate();
    const { data, updateData } = useContext(MyContext);
    const { searched_planes_data, update_searched_data } = useContext(MyContext);
    const {compare_plane_choosed_1 , update_compare_plane_1} = useContext(MyContext)
    const [searchInput, setSearchInput] = useState(searched_planes_data);
    const [aircraft_result , setaircraft_result] = useState([])
    const [showing_compare , setShowing_compare] = useState(false)
    const {current_list_lenght_planes ,setCurrent_list_lenght_planes } = useContext(MyContext)
    const [ready_compare ,setReady_compare ] = useState(null)
    const {comparing_error , update_error_data} = useContext(MyContext)
    const [searchInput_regex, setSearchInput_regex] = useState("");
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
        setaircraft_result((prev_saircraft) =>prev_saircraft =  searchStrings(list_planes, String(searchInput)))
        console.log(searchInput);
    };


 
 
    const handleSearchButtonClick = () => {
        // console.log(searchInput);
        setaircraft_result((prev_saircraft) =>prev_saircraft =  searchStrings(list_planes, String(searchInput)))
        // console.log(searchStrings(list_planes, String(searchInput)));
    };
    const go_back_about = () =>{
        update_searched_data(String(""))
        updateData(String(""))
        navigate("/about")
    }   
    useEffect(() => {
      handleSearchButtonClick();
      }, []);
    const Navigate_planepage = (element_navigate) => {
      update_searched_data(String(searchInput))
      updateData(String(element_navigate))
      navigate(`/new-page/${element_navigate}`);
    }
    const navigate_compare = () => {
        navigate("/comparison");
      }
    const dropdown_compare_list = () => {
        setShowing_compare( showing_compare === true ? false :true)


        if(current_list_lenght_planes >= 0){
          setReady_compare(true)
     
        }
        else if(current_list_lenght_planes < 1){
          setReady_compare(false)
      
        }
          
    }

    const remove_plane_compare_list = (element_choosed) => {
        update_compare_plane_1(element_choosed , "remove")
    }
    return ( 
        <div>
        <Helmet>
        <title>SkylabRES</title>
        <meta name="description">A comprehensive research website offering comparison tools for 120+ aircrafts</meta>
      </Helmet>
            <nav className="nav-bar">   
                <div className="nav-bar-brand">
                  {/* <img id="menu-logo" src={Menu_logo}></img> */}
           
                  <img id="logo-image" src={Com_logo}></img>
                    <h2>Skylab</h2>
             
                </div>
                  <div className="search-bar-container">
                      <input type="text" className="search-bar" placeholder="Search..." value={searchInput} onChange={handleSearchInput} />
                     
                    <div id="search-icon-container">
                    <img id="search_icon"  onClick={handleSearchButtonClick} src={search_icon}></img>
                    </div>

                    <div id="compare-icon-container" onClick={() => dropdown_compare_list()}>
                        <img id="compare_icon" src={compare_icon}></img>
                       
                    </div>
                    <div id="compare-listing-container">
                            {showing_compare && (
                                <div id="compare-dropdown">
                                    <h3>Comparison list</h3>
                                   
                                    {compare_plane_choosed_1.map((element) => 
                                    <div className="comparing-listing-planes-container">
                                          <li id={element} onClick={() =>Navigate_planepage(element) } className="compare-specific-plane-text">{element}</li>
                                          <img src={remove_button} onClick={() => remove_plane_compare_list(element)} className="remove-image"></img>
                                    </div>
                                    )}
                                    <p id="error-compare-text">{comparing_error}</p>
                                    {ready_compare && (
                                        <button id="compare-button-display" onClick={() => navigate_compare()}>compare</button>
                                    )}
                                  
                                </div>
                               
                            )}
                         
                        </div>
                </div>
                {/* <h3 className="about_creator_text"><b>V1.4.2</b></h3> */}
                <div>
                    <h2 onClick={() => go_back_about()} className="about_creator_text"><b>Creator info</b></h2>
                </div>
            </nav>
            <div id="search-container">
    
            <div id="main-search-section">
                {aircraft_result.map((element) => 
                <div id="search-tag">
                    <div class="search-result" id={element} onClick={() => Navigate_planepage(element)}>
                        <h4>{element}</h4>
                        <img src={airplane_comercial[String(element)]["General Information"]["aircraft_image"]} alt="Airbus A320"/>
                        <ul>
                        <li><i class="fas fa-plane"></i> <h2>Company: {airplane_comercial[element]["General Information"]["Manufacturer"]}</h2></li>
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