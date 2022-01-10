import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"
import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow } from "../Data/dataFunc"




function Liabilities() {
   
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()



    return (
        <>
            <h2>Liabilities</h2>
            <p>Home Mortgage: <span>{liabilityState.homeMortgage}</span></p>
            <p>School Loans: <span>{liabilityState.schoolLoans}</span></p>
            <p>Car Loans: <span>{liabilityState.carLoans}</span></p>
            <p>Credit Cards: <span>{liabilityState.creditCards}</span></p>
            <p>Retial Debt: <span>{liabilityState.retailDebt}</span></p>
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
            
        </>
    )
}

export default Liabilities