import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"
import PayLiab from "./PayLiab"
import PayLoan from "./PayLoan"
import PayBus from "./PayBus"
import PayRE from "./PayRE"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, newBusinessDebts } from "../Data/dataFunc"


const PurpleBox = styled.div`
border: solid 4px rgb(128, 17, 128);
padding: 5px;
margin: 10px;
`
const PurpleH1 = styled.h1`
    color: white;
    background-color: rgb(128, 17, 128);
`

function Liabilities() {
   
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, payLiabBtn, setPayLiabBtn, payLoanBtn, setPayLoanBtn, payBusBtn, setPayBusBtn, payREBtn, setPayREBtn } = useShareMyStates()



    return (
        <>
            <PurpleBox>
                
            <PurpleH1>Liabilities</PurpleH1>

            <p>Home Mortgage: <span>{liabilityState.homeMortgage}</span></p>
            <p>School Loans: <span>{liabilityState.schoolLoans}</span></p>
            <p>Car Loans: <span>{liabilityState.carLoans}</span></p>
            <p>Credit Cards: <span>{liabilityState.creditCards}</span></p>
            <p>Retial Debt: <span>{liabilityState.retailDebt}</span></p>

            <button onClick={() => setPayLiabBtn(true)}>Make Payment</button>

            {payLiabBtn ? <PayLiab /> : <></>}
           
            <hr></hr>
            <h4>Bank Loans (10%)</h4>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>amount</th>
                        <th>remaining</th>
                    </tr>
                </thead>
                <tbody>
                { liabilityState.bankLoans.map((loan) => {
                    return (
                        <tr key={loan.id}>
                            <td>{loan.name}</td>
                            <td>{loan.amount}</td>
                            <td>{loan.remaining}</td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>



             <button onClick={() => setPayLoanBtn(true)}>Make Payment</button>

             {payLoanBtn ? <PayLoan /> : <></>}
        

            <hr></hr>

            <p>Real Estate</p>   
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>mortgage</th>
                    </tr>
                </thead>
                <tbody>
                { liabilityState.reEsMortgages.map((estate) => {
                    return (
                        <tr key={estate.id}>
                            <td>{estate.name}</td>
                            <td>{estate.mortgage}</td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>
            <button onClick={()=>setPayREBtn(true)}>Make Payment</button>
            
            {payREBtn ? <PayRE /> : <></>}

            <hr></hr>
            <h4>Business Debts</h4>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>debt</th>
                    </tr>
                </thead>
                <tbody>
                { liabilityState.businessDebts.map((bDebt) => {
                    return (
                        <tr key={bDebt.id}>
                            <td>{bDebt.name}</td>
                            <td>{bDebt.debt}</td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>

            <button onClick={()=>setPayBusBtn(true)}>Make Payment</button>
            


            {payBusBtn ? <PayBus /> : <></>}

            <hr></hr>

              </PurpleBox>
        </>
    )
}

export default Liabilities