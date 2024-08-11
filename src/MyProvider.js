// src/MyProvider.js
import { useState, createContext } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [data, setData] = useState(""); // Replace 'initialValue' with your initial data
  const [searched_planes_data , setSearched_planes_data] = useState("")
  const [compare_plane_choosed_1 , setCompare_plane_choosed_1] = useState([])
  const [comparing_error , setComparing_error] = useState("")
  const [current_list_lenght_planes , setCurrent_list_lenght_planes  ] = useState(-1)
  const updateData = (newData) => {
    setData(String(newData));
  };
  const update_searched_data = (new_search) => {
    setSearched_planes_data(new_search)
  }

  const update_error_data = () => {
    setComparing_error("")
  }
  const update_compare_plane_1 = (plane_choosed , mode) => {
    if(mode === 'update'){
      if(compare_plane_choosed_1.includes(plane_choosed)){
        setComparing_error("PLANE EXISTED")
        return null
       }
       else if(compare_plane_choosed_1.length === 2){
        setComparing_error("MAX PLANES REACHED")
        return null
       }
       else {
        setCompare_plane_choosed_1((prevComparePlanes) => [...prevComparePlanes, plane_choosed]);
        setCurrent_list_lenght_planes((prev) => prev += 1)
       }
    }
 
    else{
      setComparing_error("")
      const updated_listing = compare_plane_choosed_1.filter(item => item !== plane_choosed);
      setCompare_plane_choosed_1(updated_listing);
      setCurrent_list_lenght_planes((prev) => prev -= 1)
    }
  }
  
  return (
    <MyContext.Provider value={{ data, updateData ,searched_planes_data ,update_searched_data  , compare_plane_choosed_1 ,update_compare_plane_1 , comparing_error , update_error_data , current_list_lenght_planes , setCurrent_list_lenght_planes}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
