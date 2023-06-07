import React from 'react';
import './App.scss';
import Header from "./Companent/Header/Header";
import {Route, Routes} from "react-router-dom";
import Popular from "./Companent/Popular/Popular";
import TopRated from "./Companent/TopRated/TopRated";
import Home from "./Companent/Home/Home";
import Detail from "./Companent/Detail/Detail";
import Job from "./Companent/Job/Job";
import Prodcut from "./Companent/Prodcut/Prodcut";
import Basket from "./Companent/Basket/Basket";
import Search from "./Companent/Search/Search";
import Footer from "./Companent/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/popular' element={< Popular/>} />
           <Route path='/basket' element={<Basket/>} />
           <Route path='/top' element={<TopRated/>} />
           <Route path='/product' element={<Prodcut/>} />
           <Route path='/detail_com/:id' element={<Detail/>} />
           <Route path='/job_com/:id' element={<Job/>} />
           <Route path='/search/:movieName' element={<Search/>} />
             
         </Routes>
        <Footer/>
    </div>
  );
}

export default App;
