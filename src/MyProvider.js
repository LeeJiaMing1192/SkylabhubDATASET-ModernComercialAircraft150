// src/MyProvider.js
import { useState, createContext } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [data, setData] = useState(""); // Replace 'initialValue' with your initial data

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
