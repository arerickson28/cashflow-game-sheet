import './App.css';
import Expenses from "./components/Expenses"
import Cashflow from "./components/Cashflow"
import Liabilities from './components/Liabilities';
import Assets from './components/Assets';
import Income from './components/Income';
import NavBar from './components/NavBar';
// import { assets, liabilities, income, expenses, cashflow } from "./Data/data"
import store from "store"
import InstatiateSheet from './components/InstantiateSheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

// // if (store.get("assets") == null) {
//   store.set('assets', assets)
// // }

// store.set('liabilities', liabilities)
// store.set('income', income)
// store.set('expenses', expenses)
// store.set('cashflow', cashflow)

const instantiateSheetState ={
  sheetAssets: {
      cash: 0,
      stocksMutualsCDs: [],
      realEstate:  [],
      businesses: []
  },
  sheetLiabilities: {
      homeMortgage: 70000,
      schoolLoans: 25000,
      carLoans: 2000,
      creditCards: 1200,
      retailDebt: 700,
      reEsMortgages: [],
      businessDebts: [],
      bankLoans: []
        
  },
  sheetIncome: {
      interestIncome: 0,
      dividendIncome: 150,
      realEstateIncome: 200,
      businessIncome: 300,
      monthlySalary: 3020,
      passiveIncome: 650,
      totalIncome: 3670,
  },
  sheetExpenses: {
      taxes: 500,
      homeMortgagePayment: 55,
      schoolLoanPayment: 60,
      carPayment: 100,
      creditCardPayment: 240,
      retailPayment: 0,
      otherExpenses: 10,
      numberOfChildren: 2,
      perChildExpense: 100,
      childExpenses: 200,
      bankLoanPayment: 1500,
      totalExpenses: 2665,
  },
  sheetCashflow: {
      cashflow: 1005
  }
  
}
store.set("assets", instantiateSheetState.sheetAssets)
store.set("liabilities", instantiateSheetState.sheetLiabilities)
store.set("income", instantiateSheetState.sheetIncome)
store.set("expenses", instantiateSheetState.sheetExpenses)
store.set("cashflow", instantiateSheetState.sheetCashflow)


  return (
    <>
     <div className="App">
      <Router>
        <h1>Cashflow Game Sheet</h1>
        <NavBar />
        <Routes>
     
 
          <Route path="/cashflow-game-sheet/gamesheet" element={  
              <>
                  <div className="incExp">
                   <Income />
                  <Cashflow />
                   <Expenses />
                  </div>

                  <div className="assLiab">
                  <Assets />
                  <Liabilities />
                  </div>
                
              </>
            }/>

       <Route path="/cashflow-game-sheet/instantiate" element={<InstatiateSheet /> } />
     
    </Routes>
       </Router>

       </div>
    </>
  );
}

export default App;
