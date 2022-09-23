import React from "react"
import { useShareMyStates } from "../Data/dataFunc"
import InstantiateSheet from "./InstantiateSheet"
import Expenses from "./Expenses"
import Cashflow from "./Cashflow"
import Liabilities from './Liabilities';
import Assets from './Assets';
import Income from './Income';
import store from "store"



function GameSheet() {
    const { instantiateSheetState, setInstantiateSheetState, newSheetBtn, setNewSheetBtn } = useShareMyStates()

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

store.set("assets", instantiateSheetState.sheetAssets)
store.set("liabilities", instantiateSheetState.sheetLiabilities)
store.set("income", instantiateSheetState.sheetIncome)
store.set("expenses", instantiateSheetState.sheetExpenses)
store.set("cashflow", instantiateSheetState.sheetCashflow)

    return (
        <>


            {newSheetBtn ? <div className="instSheet"><InstantiateSheet />  </div> :

                <>
                    <div>
                        <button onClick={() => { setNewSheetBtn(true) }}>Start New Gamesheet</button>
                    </div>

                    <div className="incExp">
                        <Income />
                        <Cashflow />
                        <Expenses />
                    </div>

                    <div className="assLiab">
                        <Assets />
                        <Liabilities />
                    </div>
                </>}



            {/* <button>Reset Sheet</button> */}

        </>
    )
}


export default GameSheet