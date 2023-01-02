import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GameSheet from "./components/GameSheet"
import Home from "./components/Home"
import InstantiateSheet from './components/InstantiateSheet';
import {blankSheet, testSheet } from "./Data/dataFunc"
import store from "store"



function App() {

function makeObject(obj) {
  let object = {
    "profession": obj.profession,
    "assets": obj.sheetAssets,
    "liabilities": obj.sheetLiabilities,
    "income": obj.sheetIncome,
    "expenses": obj.sheetExpenses,
    "cashflow": obj.sheetCashflow
  }

  return object
}


function setLocalStorageIfNull(obj) {
    let theObj = makeObject(obj)
    let keyArray = Object.keys(theObj)
    let valueArray = Object.values(theObj)

    for (let i=0; i<keyArray.length; i++) {
      if (store.get(keyArray[i]) == null) {
        store.set(keyArray[i], valueArray[i])
      }
    }
}


setLocalStorageIfNull(blankSheet)

  

  return (
    <>
      <div className="App">
        <Router>
          <h1>Cashflow Game Sheet</h1>
          <NavBar />
          <Routes>
            <Route path="/cashflow-game-sheet/gamesheet" element={<GameSheet />} />
            <Route path="/cashflow-game-sheet/" element={<Home />} />
            <Route path="/cashflow-game-sheet/instantiate" element={<div className="instSheet"><InstantiateSheet /></div> } />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
