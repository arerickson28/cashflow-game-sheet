import React, { useState } from "react"
import store from "store"
import {useShareMyStates, storeIncome, storeCashflow, newCashflow, storeAssets, newDividendIncome, newTotalIncome, newTotalPassiveIncome } from "../Data/dataFunc"


function SellStock() {


    const { assetState, setAssetState, setIncomeState, setCashflowState, setSellStockBtn } = useShareMyStates()


    const [sellStockState, setSellStockState] = useState({
        "name": "",
        "no. shares": 0,
        "current price": 0,
        // "dividens/share": 0
    })

    function getMaxStocksSellable(stockName) {

        for (let i=0; i<storeAssets.stocksMutualsCDs.length; i++) {
            if (storeAssets.stocksMutualsCDs[i]["name"] == sellStockState["name"]) {
                return String(storeAssets.stocksMutualsCDs[i]["no. shares"])
        }
    }}

    function handleStockSubmit(e) {
        console.log(sellStockState)
        // storeAssets.stocksMutualsCDs.push(sellStockState)
        for (let i=0; i<storeAssets.stocksMutualsCDs.length; i++) {
            if (storeAssets.stocksMutualsCDs[i]["name"] == sellStockState["name"]) {
                storeAssets.stocksMutualsCDs[i]["no. shares"] -= sellStockState["no. shares"]
            } 
        }
        let tempArray = []
        for (let i= storeAssets.stocksMutualsCDs.length - 1; i>=0; i--) {
            
            if (storeAssets.stocksMutualsCDs[i]["no. shares"] != 0) {
                tempArray.push(storeAssets.stocksMutualsCDs[i])
                console.log(storeAssets.stocksMutualsCDs)
            }
        }

        storeAssets.stocksMutualsCDs = tempArray

        storeAssets.cash += sellStockState["no. shares"] * sellStockState["current price"]

        store.set("assets", storeAssets)
        setAssetState(storeAssets)
      
        setSellStockBtn(false)

        storeIncome.dividendIncome = newDividendIncome()
        storeIncome.passiveIncome = newTotalPassiveIncome()
        storeIncome.totalIncome = newTotalIncome()

        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        storeCashflow.cashflow = newCashflow()
        store.set("cashflow", storeCashflow)
        setCashflowState(storeCashflow)

        setSellStockState({
            "name": "",
            "no. shares": 0,
            "current price": 0,
            // "dividends/share": 0
        })
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleStockSubmit}>
                <select onChange={(e)=>setSellStockState({
                    ...sellStockState,
                    "name": e.target.value
                })}>
                    <option>--choose stock--</option>
                    {assetState.stocksMutualsCDs.map((stock) => {
                        return (
                            <option value={stock.name}>{stock.name}</option>
                        )
                    })}
                    
                </select>
                <br></br>

                <label>No. Shares</label>
                <br></br>
                <input type="number" id="sellStockQuantity" step="1" min= "0" max={getMaxStocksSellable(sellStockState["name"])} onInput={(e) => {
                
             
                        setSellStockState({
                            ...sellStockState,
                            "no. shares": parseInt(e.target.value)
                       }) 
               
                    }}

                    ></input>
                <br></br>
                <label>Current Price</label>
                <br></br>
                $<input type="number" step="1" onInput={(e) =>setSellStockState({
                 ...sellStockState,
                 "current price": parseInt(e.target.value)
                }) }></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                <button onClick={()=>setSellStockBtn(false)}>Cancel</button>
    
            </form>
        </>
    )
}

export default SellStock