import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, newBusinessDebts } from "../Data/dataFunc"


const PurpleBox = styled.div`
border: solid 4px rgb(128, 17, 128);
padding: 5px;
margin: 10px;
`


function Liabilities() {
   
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()



    return (
        <>
            <PurpleBox>

          
            <h2>Liabilities</h2>
            <p>Home Mortgage: <span>{liabilityState.homeMortgage}</span></p>
            <p>School Loans: <span>{liabilityState.schoolLoans}</span></p>
            <p>Car Loans: <span>{liabilityState.carLoans}</span></p>
            <p>Credit Cards: <span>{liabilityState.creditCards}</span></p>
            <p>Retial Debt: <span>{liabilityState.retailDebt}</span></p>
            <hr></hr>
            <h4>Bank Loans</h4>
            { liabilityState.bankLoans.map((loan) => {
                return (
                    <p key={loan.id}>{loan.amount}</p>
                )
            })}
           
            {/* <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Bank Loans:
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {displayBankLoans()}
                    </tbody>
                
                </table>
            </div> */}

            <hr></hr>

            <p>Real Estate</p>   
            <table>
                <thead>
                    <tr>
                        <th>type</th>
                        <th>mortgage</th>
                    </tr>
                </thead>
                <tbody>
                { liabilityState.reEsMortgages.map((estate) => {
                    return (
                        <tr key={estate.id}>
                            <td>{estate.type}</td>
                            <td>{estate.mortgage}</td>
                        </tr>
                    
                    )
                })}
                </tbody>
            </table>

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
            <hr></hr>

              </PurpleBox>
        </>
    )
}

export default Liabilities