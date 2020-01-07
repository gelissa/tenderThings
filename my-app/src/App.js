import React, { Component } from 'react';
import './App.css';
import TitlePage from "./pages/titlePage/title";
import TableOfContents from "./pages/tableOfContents/toc";
import PoemOne from './pages/iWasAWoman/poem';
import PoemTwo from './pages/sourApples/poem';
import PoemThree from './pages/whereDoesTheRiverFlow/poem';
import PoemFour from './pages/garden/poem';
import PoemFive from './pages/amIAPerson/poem';


function App() {
  return (
    <div >
      <TitlePage />
      <TableOfContents />
      <PoemOne />
      <PoemTwo />
      <PoemThree />
      <PoemFour />
      <PoemFive />
    </div>
  );
}

export default App;
