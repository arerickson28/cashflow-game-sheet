import React, { useState } from "react"
import styled from "styled-components"
import store from "store"
import NewBus from "./NewBus"
import NewRE from "./NewRE"
import NewStock from "./NewStock"
import SellStock from "./SellStock"
import SellRE from "./SellRE"
import SellBus from "./SellBus"


// Todo: 
// Form to initiate sheet
// On new local host, errors becuase localstorage not set
// Liabilities, once something is paid off, it turns green



import { useShareMyStates, storeAssets } from "../Data/dataFunc"




const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    `

const OrangeH1 = styled.h1`
    color: white;
    background-color: rgb(255, 123, 0);
`

function Assets() {

    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState, newBusinessBtn, setNewBusinessBtn, newREBtn, setNewREBtn, newStockBtn, setNewStockBtn, sellStockBtn, setSellStockBtn, sellREBtn, setSellREBtn, sellBusBtn, setSellBusBtn } = useShareMyStates()

    const [addSubState, setAddSubState] = useState(0)

    const [addSubCashBtn, setAddSubCashBtn] = useState("hide")

    function handleCashChange(e) {
        if (Math.abs(parseInt(e.target.value)) > parseInt(storeAssets.cash)) {
            alert("Not enough ca$h!")
            return
        } else {
            setAddSubState(parseInt(e.target.value))
        }

    }

    function handleCashSubmit(e) {
        storeAssets.cash += addSubState
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
        setAddSubState(0)
        setAddSubCashBtn("hide")
        e.preventDefault()

    }

    return (
        <>
            <OrangeBox>
                <OrangeH1>Assets</OrangeH1>
                <p>Cash : $<span>{assetState.cash}</span></p>
                <button onClick={() => {
                    setAddSubCashBtn("")
                }}>Add/Subtract</button>
                <br></br>

                <form className={addSubCashBtn} onSubmit={handleCashSubmit}>
                    <label>
                        <input type="number" step="5" value={addSubState} onChange={handleCashChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <hr></hr>
                <p>Stocks/Mutuals/CDs</p>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>no. shares</th>
                            <th>cost/share</th>
                            <th>dividends/share</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetState.stocksMutualsCDs.map((stock) => {
                            return (

                                <tr key={stock.id}>
                                    <td>{stock.name}</td>
                                    <td>{stock["no. shares"]}</td>
                                    <td>{stock["cost/share"]}</td>
                                    <td>{stock["dividends/share"]}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

                <button onClick={() => { setNewStockBtn(true) }}>Buy Stock</button>
                <button onClick={() => { setSellStockBtn(true) }}>Sell Stock</button>

                {newStockBtn ? <NewStock /> : <></>}
                {sellStockBtn ? <SellStock /> : <></>}

                <hr></hr>

                <p>Real Estate</p>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>type</th>
                            <th>down payment</th>
                            <th>cost</th>
                            <th>cashflow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetState.realEstate.map((estate) => {
                            return (
                                <tr key={estate.id}>
                                    <td>{estate.name}</td>
                                    <td>{estate.type}</td>
                                    <td>{estate.downPay}</td>
                                    <td>{estate.cost}</td>
                                    <td>{estate.cashflow}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>

                <button onClick={() => { setNewREBtn(true) }}>Buy Real Estate</button>
                <button onClick={() => { setSellREBtn(true) }}>Sell Real Estate</button>

                {newREBtn ? <NewRE /> : <></>}
                {sellREBtn ? <SellRE /> : <></>}

                <hr></hr>

                <p>Businesses</p>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>down payment</th>
                            <th>cost</th>
                            <th>cashflow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetState.businesses.map((business) => {
                            return (
                                <tr key={business.id}>
                                    <td>{business.name}</td>
                                    <td>{business.downPay}</td>
                                    <td>{business.cost}</td>
                                    <td>{business.cashflow}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <button onClick={() => { setNewBusinessBtn(true) }}>Buy Businesses</button>
                <button onClick={() => { setSellBusBtn(true) }}>Sell Business</button>

                {newBusinessBtn ? <NewBus /> : <></>}
                {sellBusBtn ? <SellBus /> : <></>}

                <hr></hr>

            </OrangeBox>

        </>
    )
}

export default Assets