import React from "react"
import styled from "styled-components"
import { storeAssets, useShareMyStates } from "../Data/dataFunc"
import InstantiateSheet from "./InstantiateSheet"
import Expenses from "./Expenses"
import Cashflow from "./Cashflow"
import Liabilities from './Liabilities';
import Assets from './Assets';
import Income from './Income';
import store from "store"



function GameSheet() {
    const { professionState, setProfessionState, instantiateSheetState, setInstantiateSheetState, newSheetBtn, setNewSheetBtn, storeProfession } = useShareMyStates()

//     setInstantiateSheetState({
//         sheetAssets: {
//             cash: 0,
//             stocksMutualsCDs: [],
//             realEstate:  [],
//             businesses: []
//         },
//         sheetLiabilities: {
//             homeMortgage: 70000,
//             schoolLoans: 25000,
//             carLoans: 2000,
//             creditCards: 1200,
//             retailDebt: 700,
//             reEsMortgages: [],
//             businessDebts: [],
//             bankLoans: []
              
//         },
//         sheetIncome: {
//             interestIncome: 0,
//             dividendIncome: 150,
//             realEstateIncome: 200,
//             businessIncome: 300,
//             monthlySalary: 3020,
//             passiveIncome: 650,
//             totalIncome: 3670,
//         },
//         sheetExpenses: {
//             taxes: 500,
//             homeMortgagePayment: 55,
//             schoolLoanPayment: 60,
//             carPayment: 100,
//             creditCardPayment: 240,
//             retailPayment: 0,
//             otherExpenses: 10,
//             numberOfChildren: 2,
//             perChildExpense: 100,
//             childExpenses: 200,
//             bankLoanPayment: 1500,
//             totalExpenses: 2665,
//         },
//         sheetCashflow: {
//             cashflow: 1005
//         }
        
// })

//     setInstantiateSheetState({
//         sheetAssets: {
//             cash: 0,
//             stocksMutualsCDs: [],
//             realEstate:  [],
//             businesses: []
//         },
//         sheetLiabilities: {
//             homeMortgage: 0,
//             schoolLoans: 0,
//             carLoans: 0,
//             creditCards: 0,
//             retailDebt: 0,
//             reEsMortgages: [],
//             businessDebts: [],
//             bankLoans: []

//         },
//         sheetIncome: {
//             interestIncome: 0,
//             dividendIncome: 0,
//             realEstateIncome: 0,
//             businessIncome: 0,
//             monthlySalary: 0,
//             passiveIncome: 0,
//             totalIncome: 0,
//         },
//         sheetExpenses: {
//             taxes: 0,
//             homeMortgagePayment: 0,
//             schoolLoanPayment: 0,
//             carPayment: 0,
//             creditCardPayment: 0,
//             retailPayment: 0,
//             otherExpenses: 0,
//             numberOfChildren: 0,
//             perChildExpense: 0,
//             childExpenses: 0,
//             bankLoanPayment: 0,
//             totalExpenses: 0,
//         },
//         sheetCashflow: {
//             cashflow: 0
//         }

// })


const BalanceSheetDiv = styled.div`
    border: solid 4px rgb(217, 22, 83);
    padding: 5px;
    margin: 10px;
`

const IncomeStatementDiv = styled.div`
border: solid 4px rgb(217, 22, 83);
padding: 5px;
margin: 10px;
`



console.log(instantiateSheetState)
console.log(instantiateSheetState.sheetProfession)
// store.set("profession", instantiateSheetState.sheetProfession)
// store.set("assets", instantiateSheetState.sheetAssets)
// store.set("liabilities", instantiateSheetState.sheetLiabilities)
// store.set("income", instantiateSheetState.sheetIncome)
// store.set("expenses", instantiateSheetState.sheetExpenses)
// store.set("cashflow", instantiateSheetState.sheetCashflow)
// console.log(storeProfession)
// console.log(storeAssets)
    return (
        <>

           
            {newSheetBtn ? <div className="instSheet"><InstantiateSheet />  </div> :

                <>
                
                    <div>
                    <h1>{professionState}</h1>
                        <button onClick={() => { setNewSheetBtn(true) }}>Start New Gamesheet</button>
                    </div>

                    <IncomeStatementDiv className="incExp">
                        
                        <div>
                        <Income />
                        <Expenses />
                        </div>
                     
                        <Cashflow />
                       
                    </IncomeStatementDiv>
                    <h1>Balance Sheet</h1>
                    <BalanceSheetDiv className="assLiab">
                        <Assets />
                        <Liabilities />
                    </BalanceSheetDiv>
                </>}



            {/* <button>Reset Sheet</button> */}

        </>
    )
}


export default GameSheet