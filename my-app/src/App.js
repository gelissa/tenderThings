import React, { Component } from 'react';
import './App.css';
import TitlePage from "./pages/titlePage/title";
import TableOfContents from "./pages/tableOfContents/toc";
import PoemOne from './pages/iWasAWoman.js/poem';


function App() {
  return (
    <div >
      <TitlePage />
      <TableOfContents />
      <PoemOne />
    </div>
  );
}

export default App;
