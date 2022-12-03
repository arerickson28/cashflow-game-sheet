import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeIncome, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newTotalIncome, newTotalPassiveIncome, storeLiabilities } from "../Data/dataFunc"





function NewBus() {


    const { setAssetState, setLiabilityState, setIncomeState, setCashflowState, setNewBusinessBtn } = useShareMyStates()


    const [newBusState, setNewBusState] = useState({
        "name": "",
        "downPay": 0,
        "cost": 0,
        "cashflow": 0
    })


    function handleBusinessSubmit(e) {

        if (newBusState["downPay"] > storeAssets.cash ) {
            alert("Not enough ca$h!")
            return
       }

        storeAssets.cash -= newBusState["downPay"]

        storeAssets.businesses.push(newBusState)

        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setNewBusinessBtn(false)

        storeIncome.businessIncome = newBusinessIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

        let newBusLiability = {
            "name": newBusState["name"],
            "debt": newBusState["cost"] - newBusState["downPay"]
        }

        storeLiabilities.businessDebts.push(newBusLiability)
        store.set("liabilities", storeLiabilities)
        setLiabilityState(storeLiabilities)

        setNewBusState({
            "name": "",
            "downPay": 0,
            "cost": 0,
            "cashflow": 0
        })
        e.preventDefault()
    }


    return (
        <>
         <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>down payment</th>
                        <th>cost</th>
                        <th>cashflow</th>
                    </tr>
                </thead>
            </table>
             <form onSubmit={handleBusinessSubmit}>
            
            <input onInput={e=>setNewBusState({
                ...newBusState,
                // "id": storeAssets.businesses.length += 1,
                "name": e.target.value
            })} type="text"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "downPay": parseInt(e.target.value)
            })} type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cost": parseInt(e.target.value)
            })}type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cashflow": parseInt(e.target.value)
            })}type="number" step="50"></input>
            <br></br>
            <input type="submit" value="Submit" />
            <button onClick={()=>setNewBusinessBtn(false)}>Cancel</button>
        </form>
        
        </>
    )

}

export default NewBus