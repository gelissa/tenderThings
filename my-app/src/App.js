import React, { Component } from 'react';
import './App.css';
import TitlePage from "./pages/titlePage/title";
import TableOfContents from "./pages/tableOfContents/toc";
import PoemOne from './pages/iWasAWoman/poem';
import PoemTwo from './pages/sourApples/poem';
import PoemThree from './pages/whereDoesTheRiverFlow/poem';
import PoemFour from './pages/garden/poem';
import PoemFive from './pages/amIAPerson/poem';
import PoemSix from './pages/theRoom/poem';
import PoemSeven from './pages/theRoom/poem';
import PoemEight from './pages/aGodOfBlueSkin/poem';
import PoemNine from './pages/theWeightOfMyTears/poem';
import PoemTen from './pages/empty/poem';
import PoemEleven from './pages/stigma/poem';
import PoemTwelve from './pages/bzzz/poem';
import PoemThirteen from './pages/iToldMyselfAStory/poem';
import PoemFourteen from './pages/yearsWereSpentWaiting/poem';

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
      <PoemSix />
      <PoemSeven />
      <PoemEight />
      <PoemNine />
      <PoemTen />
      <PoemEleven />
      <PoemTwelve />
      <PoemThirteen />
      <PoemFourteen />
    </div>
  );
}

export default App;
