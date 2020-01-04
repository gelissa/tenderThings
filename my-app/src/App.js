import React, { Component } from 'react';
import './App.css';
import TitlePage from "./pages/titlePage/title";
import TableOfContents from "./pages/tableOfContents/toc";


function App() {
  return (
    <div >
      <TitlePage />
      <TableOfContents />
    </div>
  );
}

export default App;
