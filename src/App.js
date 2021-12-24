import './App.css';
import Expenses from "./components/Expenses"
import Cashflow from "./components/Cashflow"
import { assets, liabilities, income, expenses, cashflow } from "./Data/data"

function App() {
  return (
    <div className="App">
      <h1>Cashflow Game Sheet</h1>
      <Expenses />
      <Cashflow />
    </div>
  );
}

export default App;
