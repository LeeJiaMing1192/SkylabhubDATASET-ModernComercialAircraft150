import logo from './logo.svg';
import './App.css';
import Main_page from "./pages/main_page"
import Search_page from './pages/search_page';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./pages/aircraft_display_page"
import Creator_page from './pages/Creator';
import Comparison_detailed_page from './pages/Comparision_detailed';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
        <Analytics />
      <BrowserRouter>

        <Routes>
      <Route path="/" element={<Search_page/>} />
      <Route path="/search" element={<Search_page/>} />
      <Route path="/about" element={<Creator_page/>} />
      <Route path="/new-page/:divId" element={<NewPage />} />
      <Route path="/comparison" element={<Comparison_detailed_page/>}/>
      
      
    </Routes>
 
  </BrowserRouter>
 
    </>
  
);
 
}

export default App;
