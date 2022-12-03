import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeExpenses, newTotalExpenses, storeCashflow, newCashflow, storeLiabilities } from "../Data/dataFunc"


function PayLiab() {
    const { setLiabilityState, setExpensesState, setCashflowState, setPayLiabBtn } = useShareMyStates()


    const [liabPaymentState, setLiabPaymentState] = useState({
        "liability": "",
        "amount": 0
    })

    function handleLiabPayment() {
        setPayLiabBtn(false)
        console.log(liabPaymentState["liability"], liabPaymentState.amount)
        let chosenLiability = liabPaymentState["liability"]

        storeLiabilities[chosenLiability].balance -= liabPaymentState.amount
        console.log(storeLiabilities[chosenLiability])

        if (storeLiabilities[chosenLiability].balance == 0) {

            let relatedExpense = storeLiabilities[chosenLiability].expensePair
         
            storeExpenses[relatedExpense] = 0

            storeExpenses.totalExpenses = newTotalExpenses()
            store.set("expenses", storeExpenses)
            setExpensesState(storeExpenses)
         
            storeCashflow.cashflow = newCashflow()
            store.set("cashflow", storeCashflow)
            setCashflowState(storeCashflow)
    
        }
     
        store.set("liabilities", storeLiabilities)
    
        setLiabilityState(storeLiabilities)


        setLiabPaymentState({
            "liability": "",
            "amount": 0
        })
    }

    return (
        <>
            <form onSubmit={handleLiabPayment}>
                <select onChange={(e)=>setLiabPaymentState({
                    ...liabPaymentState,
                    "liability": e.target.value
                })}>
                    <option>--choose liability--</option>
                    <option value="homeMortgage">Home Mortgage</option>
                    <option value="schoolLoans">School Loans</option>
                    <option value="carLoans">Car Loans</option>
                    <option value="creditCards">Credit Cards</option>
                    <option value="retailDebt">Retail Debt</option>
                </select>

                <input type="number" step="50" onInput={(e) =>setLiabPaymentState({
                     ...liabPaymentState,
                     "amount": parseInt(e.target.value)
                }) }></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <button onClick={()=>setPayLiabBtn(false)}>Cancel</button>
            </form>
        </>
    )

}

export default PayLiab