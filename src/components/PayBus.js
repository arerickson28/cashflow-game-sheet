import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"
import {useShareMyStates, storeExpenses, storeIncome, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newRealEstateIncome, newDividendIncome, newTotalIncome, newTotalPassiveIncome, storeLiabilities } from "../Data/dataFunc"

function PayBus() {
    const { liabilityState, setLiabilityState, expensesState, setExpensesState, cashflowState, setCashflowState, payLiabBtn, setPayLiabBtn, payBusBtn, setPayBusBtn } = useShareMyStates()

    const [busPaymentState, setBusPaymentState] = useState({
        "business": "",
        "amount": 0
    })

    function handleBusPayment() {
        setPayBusBtn(false)
        // console.log(busPaymentState["liability"], liabPaymentState.amount)
        let chosenBusiness = busPaymentState["business"]

        
        for (let i=0; i<storeLiabilities["businessDebts"].length; i++)
            if (storeLiabilities["businessDebts"][i]["name"] === chosenBusiness) {
                storeLiabilities["businessDebts"][i]["debt"] -= busPaymentState.amount
                if(storeLiabilities["businessDebts"][i]["debt"] == 0) {
                    storeLiabilities["businessDebts"].pop(i)
                }
                store.set("liabilities", storeLiabilities)
                setLiabilityState(storeLiabilities)
            }
              


        setBusPaymentState({
            "business": "",
            "amount": 0
        })
    }




    return (
        <>
        <form onSubmit={handleBusPayment}>
            <select onChange={(e)=>setBusPaymentState({
                ...busPaymentState,
                "business": e.target.value
            })}>
                <option>--choose business--</option>
                {liabilityState.businessDebts.map((bus) => {
                    return (
                        <option value={bus.name}>{bus.name}</option>
                    )
                })}
                
            </select>

            <input type="number" step="50" onInput={(e) =>setBusPaymentState({
                 ...busPaymentState,
                 "amount": parseInt(e.target.value)
            }) }></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            <button onClick={()=> setPayBusBtn(false)}>Cancel</button>
        </form>
    </>
    )
}

export default PayBus