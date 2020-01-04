import React, { Component } from 'react';
import './App.css';
import TitlePage from "./pages/titlePage/title";
import TableOfContents from "./pages/tableOfContents/toc";
import PoemOne from './pages/iWasAWoman.js/poem';
import PoemTwo from './pages/sourApples/poem';


function App() {
  return (
    <div >
      <TitlePage />
      <TableOfContents />
      <PoemOne />
      <PoemTwo />
    </div>
  );
}

export default App;
