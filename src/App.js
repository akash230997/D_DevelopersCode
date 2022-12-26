import './App.css';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TableData from './TableData';
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Users';

const dataComingFromBack = createContext();

function App() {
  const [DataAPI, setData] = useState([]);

  useEffect(() => {
    const funcData = async () => {
      const res = await axios.get(
        "https://dummyjson.com/users"
      );
      setData(res.data.users)
    };
    funcData()
  }, []);

  console.log("Coming from APIs",DataAPI.bank)
  return (
    <>
      <BrowserRouter>
        <dataComingFromBack.Provider value={DataAPI} >
          <Routes>
            <Route path="/" element={<TableData />} />
            <Route path="/userprofile/:id" element={<Users />} />
          </Routes>
        </dataComingFromBack.Provider>
      </BrowserRouter>
    </>
  );
}

export { App, dataComingFromBack };
