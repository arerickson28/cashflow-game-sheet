import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeIncome, storeCashflow, newCashflow, storeAssets, newBusinessIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"

function SellBus() {


    const { assetState, setAssetState, setIncomeState, setCashflowState, setSellBusBtn } = useShareMyStates()


    const [sellBusState, setSellBusState] = useState({
        "name": "",
        "sellPrice": 0
    })

    function handleBusSubmit(e) {
        console.log(sellBusState)
       
        let tempArray = []
        for (let i=0; i<storeAssets.businesses.length; i++) {
            if (storeAssets.businesses[i]["name"] !== sellBusState["name"]) {
                tempArray.push(storeAssets.businesses[i])
            }
        }

        storeAssets.businesses = tempArray

        storeAssets.cash += sellBusState["sellPrice"] 

        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setSellBusBtn(false)

        storeIncome.businessIncome = newBusinessIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

        setSellBusState({
            "name": "",
            "sellPrice": 0
        })
        e.preventDefault()
    }
    return (
    <>
      
    <form onSubmit={handleBusSubmit}>
        <label>Sell Price</label>
        <br></br>
        $<input type="number" step="100" onInput={(e) =>setSellBusState({
                 ...sellBusState,
                 "sellPrice": parseInt(e.target.value)
                }) }></input>


       
        <br></br>
        <select onChange={(e)=>setSellBusState({
            ...sellBusState,
            "name": e.target.value
        })}>
            <option>--choose Business--</option>
            {assetState.businesses.map((bus) => {
                return (
                    <option value={bus.name}>{bus.name}</option>
                )
            })}
            
        </select>
        <br></br>
              

        <input type="submit" value="Submit"></input>
        <button onClick={()=>setSellBusBtn(false)}>Cancel</button>

    </form>

</>
)
}

export default SellBus
