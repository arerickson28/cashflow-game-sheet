import React from "react"
import styled from "styled-components"
import { useShareMyStates, newTotalIncome, newTotalExpenses, newCashflow, newChildExpenses } from "../Data/dataFunc"
import InstantiateSheet from "./InstantiateSheet"
import Expenses from "./Expenses"
import Cashflow from "./Cashflow"
import Liabilities from './Liabilities';
import Assets from './Assets';
import Income from './Income';
import store from "store"

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

const TestDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

const BoxedIncExpDiv = styled.div`
    width: 700px;
`


function GameSheet() {
    const { professionState, instantiateSheetState, newSheetBtn, setNewSheetBtn } = useShareMyStates()

    // newTotalIncome()
    // newChildExpenses() 
    // newTotalExpenses() 
    // newCashflow() 

    return (
        <>

           
            {/* {newSheetBtn ? <div className="instSheet"><InstantiateSheet />  </div> : */}

                <>
                
                    <div>
                    <h1>{professionState}</h1>
                    {/* <button onClick={() => { setNewSheetBtn(true) }}>Start New Gamesheet</button> */}
                    </div>
                    
                    <h1>Income Statement</h1>
                    {/* <IncomeStatementDiv className="incExp"> */}
                    <TestDiv className="incExp">
                        
                        {/* <BoxedIncExpDiv> */}
                        {/* <div> */}
                          
                        <Income />
                        <Expenses />
                        <Cashflow />
                        {/* </BoxedIncExpDiv> */}
                        {/* </div> */}
                       
                       
                    {/* </IncomeStatementDiv> */}
                    </TestDiv>
                   
                    <h1>Balance Sheet</h1>
                    {/* <BalanceSheetDiv className="assLiab"> */}
                    <div className="assLiab">
                        <Assets />
                        <Liabilities />
                    {/* </BalanceSheetDiv> */}
                    </div>
                </>
                {/* } */}



            {/* <button>Reset Sheet</button> */}

        </>
    )
}


export default GameSheet