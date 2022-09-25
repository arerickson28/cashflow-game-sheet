import React, { useState } from "react"
import styled from "styled-components"
import store from "store"
import { useShareMyStates } from "../Data/dataFunc"


const PinkBox = styled.div`
    border: solid 4px rgb(255,182,193);
    padding: 5px;
    margin: 10px;
    `




function InstantiateSheet() {

    const { instantiateSheetState, setInstantiateSheetState, newSheetBtn, setNewSheetBtn } = useShareMyStates()

    
       

store.set("assets", instantiateSheetState.sheetAssets)
store.set("liabilities", instantiateSheetState.sheetLiabilities)
store.set("income", instantiateSheetState.sheetIncome)
store.set("expenses", instantiateSheetState.sheetExpenses)
store.set("cashflow", instantiateSheetState.sheetCashflow)

    function handleSheetSubmit(e) {
        console.log("sheet submittd")
        // set instatiateSheetState

        store.set("profession", instantiateSheetState.sheetProfession)
        store.set("assets", instantiateSheetState.sheetAssets)
        store.set("liabilities", instantiateSheetState.sheetLiabilities)
        store.set("income", instantiateSheetState.sheetIncome)
        store.set("expenses", instantiateSheetState.sheetExpenses)
        store.set("cashflow", instantiateSheetState.sheetCashflow)

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
        setNewSheetBtn(false)
        e.preventDefault()
    }

    // <input onInput={e=>setNewREState({
    //     ...newREState,
    //     "name": e.target.value
    // })} type="text"></input>

    return (
        <>
            <PinkBox>
                <form onSubmit={handleSheetSubmit}>
                    <h3>Profession</h3>
                    <input onInput={e => setInstantiateSheetState({
                        ...instantiateSheetState,
                        "sheetProfession": e.target.value
                    })}></input>
                    <h3>Monthly Salary</h3>
                    <input onInput={e => setInstantiateSheetState({
                        ...instantiateSheetState,
                        "sheetIncome": {
                        ...instantiateSheetState.sheetIncome,
                        "monthlySalary": e.target.value
                    }
                    })}></input>
                    <h3>Cashflow</h3>
                    <input></input>
                    <h3>Savings</h3>
                    <input></input>
                    <h3>Per Child Expense:</h3>
                    <input></input>
                    <h3>Taxes</h3>
                    <input></input>
                    <h3>Mortgage/Rent</h3>
                    <input></input>
                    <h3>School Loans</h3>
                    <input></input>
                    <h3>Car Payment</h3>
                    <input></input>
                    <h2>Liabilities</h2>
                    <h3>Mortgage</h3>
                    <input></input>
                    <h3>School Loans</h3>
                    <input></input>
                    <h3>Car Loans</h3>
                    <input></input>
                    <h3>Credit Cards</h3>
                    <input></input>
                    <h3>Retail Debt</h3>
                    <input></input>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>

            </PinkBox>
        </>
    )
}

export default InstantiateSheet