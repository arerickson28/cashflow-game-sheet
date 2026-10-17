
import React, { createContext, useContext } from 'react';
import store from "store"
import { useState } from 'react';

// Keep your existing imports for store and blankSheet.

const blankSheet = {
sheetProfession: "",
sheetAssets: {
    cash: 0,
    stocksMutualsCDs: [],
    realEstate:  [],
    businesses: []
},
sheetLiabilities: {
    homeMortgage: {
        balance: 0,
        expensePair: "homeMortgagePayment"
      },
      schoolLoans: {
        balance:  0,
        expensePair: "schoolLoanPayment"
      },
      carLoans: {
        balance:  0,
        expensePair: "carPayment"
      },
      creditCards: {
        balance:  0,
        expensePair: "creditCardPayment"
      },
      retailDebt: {
        balance: 0,
        expensePair: "retailPayment"
      },
    reEsMortgages: [],
    businessDebts: [],
    bankLoans: []
},
sheetIncome: {
    interestIncome: 0,
    dividendIncome: 0,
    realEstateIncome: 0,
    businessIncome: 0,
    monthlySalary: 0,
    passiveIncome: 0,
    totalIncome: 0,
},
sheetExpenses: {
    taxes: 0,
    homeMortgagePayment: 0,
    schoolLoanPayment: 0,
    carPayment: 0,
    creditCardPayment: 0,
    retailPayment: 0,
    otherExpenses: 0,
    numberOfChildren: 0,
    perChildExpense: 0,
    childExpenses: 0,
    bankLoanPayment: 0,
    totalExpenses: 0,
},
sheetCashflow: {
    cashflow: 0
}   
}

const SharedStatesContext = createContext(null);

const useSharedStates = () => {
  const [professionState, setProfessionState] = useState(store.get("profession"));
  const [assetState, setAssetState] = useState(store.get("assets"));
  const [liabilityState, setLiabilityState] = useState(store.get("liabilities"));
  const [incomeState, setIncomeState] = useState(store.get("income"));
  const [expensesState, setExpensesState] = useState(store.get("expenses"));
  const [cashflowState, setCashflowState] = useState(store.get("cashflow"));

  const [newBusinessBtn, setNewBusinessBtn] = useState(false);
  const [newREBtn, setNewREBtn] = useState(false);
  const [newStockBtn, setNewStockBtn] = useState(false);
  const [sellStockBtn, setSellStockBtn] = useState(false);
  const [payLiabBtn, setPayLiabBtn] = useState(false);
  const [payLoanBtn, setPayLoanBtn] = useState(false);
  const [newLoanBtn, setNewLoanBtn] = useState(false);
  const [payBusBtn, setPayBusBtn] = useState(false);
  const [payREBtn, setPayREBtn] = useState(false);
  const [sellREBtn, setSellREBtn] = useState(false);
  const [sellBusBtn, setSellBusBtn] = useState(false);
  const [newSheetBtn, setNewSheetBtn] = useState(false);
  const [instantiateSheetState, setInstantiateSheetState] =
    useState(blankSheet);

  return {
    professionState, setProfessionState,
    assetState, setAssetState,
    liabilityState, setLiabilityState,
    incomeState, setIncomeState,
    expensesState, setExpensesState,
    cashflowState, setCashflowState,
    newBusinessBtn, setNewBusinessBtn,
    newREBtn, setNewREBtn,
    newStockBtn, setNewStockBtn,
    sellStockBtn, setSellStockBtn,
    payLiabBtn, setPayLiabBtn,
    newLoanBtn, setNewLoanBtn,
    payLoanBtn, setPayLoanBtn,
    payBusBtn, setPayBusBtn,
    payREBtn, setPayREBtn,
    sellREBtn, setSellREBtn,
    sellBusBtn, setSellBusBtn,
    instantiateSheetState, setInstantiateSheetState,
    newSheetBtn, setNewSheetBtn,
  };
};

export function SharedStatesProvider({ children }) {
  const sharedStates = useSharedStates();

  return (
    <SharedStatesContext.Provider value={sharedStates}>
      {children}
    </SharedStatesContext.Provider>
  );
}

export function useShareMyStates() {
  const context = useContext(SharedStatesContext);

  if (context === null) {
    throw new Error(
      'useShareMyStates must be used within SharedStatesProvider'
    );
  }

  return context;
}
