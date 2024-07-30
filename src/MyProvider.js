// src/MyProvider.js
import { useState, createContext } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [data, setData] = useState(""); // Replace 'initialValue' with your initial data
  const [searched_planes_data , setSearched_planes_data] = useState("")

  const updateData = (newData) => {
    setData(String(newData));
  };
  const update_searched_data = (new_search) => {
    setSearched_planes_data(new_search)
  }

  return (
    <MyContext.Provider value={{ data, updateData ,searched_planes_data ,update_searched_data  }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
