import React, { useState } from "react"
import styled from "styled-components"
import store from "store"
import {useShareMyStates, storeExpenses, storeIncome, storeLiabilities, storeCashflow, storeAssets, } from "../Data/dataFunc" 


const PinkBox = styled.div`
    border: solid 4px rgb(255,182,193);
    padding: 5px;
    margin: 10px;
    `


    

function InstatiateSheet() {

    const [instantiateSheetState, setInstantiateSheetState] = useState({
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
        
})

    function handleSheetSubmit() {
        console.log("sheet submittd")
        // set instatiateSheetState

        store.set("assets", instantiateSheetState.sheetAssets)
        store.set("liabilities", instantiateSheetState.sheetLiabilities)
        store.set("income", instantiateSheetState.sheetIncome)
        store.set("expenses", instantiateSheetState.sheetExpenses)
        store.set("cashflow", instantiateSheetState.sheetCashflow)
    }

    return (
        <>
            <PinkBox>
                <h2>This is the InstatiateSheet component</h2>
                <h3>Profession</h3>
                <h3>Salary</h3>
                <h3>Cashflow</h3>
                <h3>Savings</h3>
                <h3>Per Child Expense:</h3>
                <h3>Taxes</h3>
                <h3>Mortgage/Rent</h3>
                <h3>School Loans</h3>
                <h3>Car Payment</h3>
                <h2>Liabilities</h2>
                <h3>Mortgage</h3>
                <h3>School Loans</h3>
                <h3>Car Loans</h3>
                <h3>Credit Cards</h3>
                <h3>Retail Debt</h3>

            </PinkBox>
        </>
    )
}

export default InstatiateSheet