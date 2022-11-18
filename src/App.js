import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GameSheet from "./components/GameSheet"
import Home from "./components/Home"
import store from "store"
import Liabilities from './components/Liabilities';



function App() {

  // // if (store.get("assets") == null) {
  //   store.set('assets', assets)
  // // }

  // store.set('liabilities', liabilities)
  // store.set('income', income)
  // store.set('expenses', expenses)
  // store.set('cashflow', cashflow)

  // const instantiateSheetState = {
  //   sheetAssets: {
  //       cash: 0,
  //       stocksMutualsCDs: [],
  //       realEstate:  [],
  //       businesses: []
  //   },
    // sheetLiabilities: {
    //     homeMortgage: {
    //       balance: 70000,
    //       expensePair: "homeMortgagePayment"
    //     },
    //     schoolLoans: {
    //       balance:  25000,
    //       expensePair: "schoolLoanPayment"
    //     },
    //     carLoans: {
    //       balance:  2000,
    //       expensePair: "carPayment"
    //     },
    //     creditCards: {
    //       balance:  1200,
    //       expensePair: "creditCardPayment"
    //     },
    //     retailDebt: {
    //       balance: 700,
    //       expensePair: "retailPayment"
    //     },
    //     reEsMortgages: [],
    //     businessDebts: [],
    //     bankLoans: [  {
    //       id: "a",
    //       name: "Wells Fargo",
    //       amount: 10000,
    //       remaining: 10000
    //   },
    //   {
    //       id: "b",
      //     name: "Spire Credit Union",
      //     amount: 5000,
      //     remaining: 5000
      // }]

  //   },
  //   sheetIncome: {
  //       interestIncome: 0,
  //       dividendIncome: 150,
  //       realEstateIncome: 200,
  //       businessIncome: 300,
  //       monthlySalary: 3020,
  //       passiveIncome: 650,
  //       totalIncome: 3670,
  //   },
  //   sheetExpenses: {
  //       taxes: 500,
  //       homeMortgagePayment: 55,
  //       schoolLoanPayment: 60,
  //       carPayment: 100,
  //       creditCardPayment: 240,
  //       retailPayment: 0,
  //       otherExpenses: 10,
  //       numberOfChildren: 2,
  //       perChildExpense: 100,
  //       childExpenses: 200,
  //       bankLoanPayment: 1500,
  //       totalExpenses: 2665,
  //   },
  //   sheetCashflow: {
  //       cashflow: 1005
  //   }

  // }
  // store.set("assets", instantiateSheetState.sheetAssets)
  // store.set("liabilities", instantiateSheetState.sheetLiabilities)
  // store.set("income", instantiateSheetState.sheetIncome)
  // store.set("expenses", instantiateSheetState.sheetExpenses)
  // store.set("cashflow", instantiateSheetState.sheetCashflow)

  // console.log(store.get("liabilities"), "storeLiabilities")

  return (
    <>
      <div className="App">
        <Router>
          <h1>Cashflow Game Sheet</h1>
          <NavBar />
          <Routes>
            <Route path="/cashflow-game-sheet/gamesheet" element={<GameSheet />} />
            <Route path="/cashflow-game-sheet/" element={<Home />} />
            {/* <Route path="/cashflow-game-sheet/instantiate" element={<InstatiateSheet /> } /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
