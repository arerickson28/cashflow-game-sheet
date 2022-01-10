import './App.css';
import Expenses from "./components/Expenses"
import Cashflow from "./components/Cashflow"
import Liabilities from './components/Liabilities';
import { assets, liabilities, income, expenses, cashflow } from "./Data/data"
import store from "store"


function App() {

// if (store.get("assets") == null) {
  store.set('assets', assets)
// }

store.set('liabilities', liabilities)
store.set('income', income)
store.set('expenses', expenses)
store.set('cashflow', cashflow)



  return (
    <div className="App">
      <h1>Cashflow Game Sheet</h1>
      <Expenses />
      <Cashflow />
      <hr></hr>
      <Liabilities />
    </div>
  );
}

export default App;
