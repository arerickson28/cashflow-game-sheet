import React, { useState } from "react"
import { useBetween } from "use-between"
import styled from "styled-components"
import store from "store"


import { assets, liabilities, income, expenses, cashflow } from "../Data/data"

import {useShareMyStates, storeExpenses, newChildExpenses, newTotalExpenses, storeCashflow, newCashflow, storeAssets, newBusinessIncome } from "../Data/dataFunc"


const useSharedStates = ()=> {
    const [assetState, setAssetState] = useState(store.get('assets'))
    const [liabilityState, setLiabilityState] = useState(store.get("liabilities"))
    const [incomeState, setIncomeState] = useState(store.get("income"))
    const [expensesState, setExpensesState] = useState(store.get("expenses"))
    const [cashflowState, setCashflowState] = useState(store.get("cashflow"))
}

const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    `

function Assets() {
    
    const { assetState, setAssetState, liabilityState, setLiabilityState, incomeState, setIncomeState, expensesState, setExpensesState, cashflowState, setCashflowState } = useShareMyStates()

    const [addSubState, setAddSubState] = useState(0)

    const [addSubCashBtn, setAddSubCashBtn] = useState("hide")

    const [newBusState, setNewBusState] = useState({
        "name": "",
        "downPay": 0,
        "cost": 0,
        "cashflow": 0
    })

    const [newBusinessBtn, setNewBusinessBtn] = useState("hide")

    function handleCashChange(e) {
        setAddSubState(parseInt(e.target.value))
    }

    function handleCashSubmit(e) {
        storeAssets.cash += addSubState
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
        setAddSubState(0)
        setAddSubCashBtn("hide")
        e.preventDefault()

    }

    function hanldeBusinessSubmit(e) {
        console.log(newBusState)
        storeAssets.businesses.push(newBusState)
        store.set("assets", storeAssets)
        setAssetState(storeAssets)
        setNewBusState({
            "name": "",
            "downPay": 0,
            "cost": 0,
            "cashflow": 0
        })
        setNewBusinessBtn("hide")
        newBusinessIncome()
        e.preventDefault()
    }

    return (
        <>
        <OrangeBox>
        <h1>Assets</h1>
        <p>Cash : $<span>{assetState.cash}</span></p>
        <button onClick={() => {
            setAddSubCashBtn("")
        }}>Add/Subtract</button>
        <br></br>

        <form className={addSubCashBtn} onSubmit={handleCashSubmit}>
            <label>
            <input type="number" step="10" value={addSubState} onChange={handleCashChange} />
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
            { assetState.stocksMutualsCDs.map((stock) => {
                return (
                  
                    <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>{stock["no. shares"]}</td>
                        <td>{stock["cost/share"]}</td>
                        <td>{stock["dividends/share"]}</td>
                    </tr>
                  
                   
                )
            })}
              
               <tr key="form">
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
         
            </tbody>
        </table>
        <button>Buy Stock</button>
        <hr></hr>

        <p>Real Estate</p>   
        <table>
            <thead>
                <tr>
                    <th>type</th>
                    <th>down payment</th>
                    <th>cost</th>
                    <th>cashflow</th>
                </tr>
            </thead>
            <tbody>
            { assetState.realEstate.map((estate) => {
                return (
                    <tr key={estate.id}>
                        <td>{estate.type}</td>
                        <td>{estate.downPay}</td>
                        <td>{estate.cost}</td>
                        <td>{estate.cashflow}</td>
                    </tr>
                
                )
            })}
               <tr key="form">
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
            </tr>
            </tbody>
        </table>

        <button>Buy Real Estate</button>

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
            { assetState.businesses.map((business) => {
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
   
        {/* <table>
        <tr key="form">
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
            </tr>
        </table> */}

        <button onClick ={() => {setNewBusinessBtn("")}}>Buy Businesses</button>

        <form className={newBusinessBtn} onSubmit={hanldeBusinessSubmit}>
            
            <input onInput={e=>setNewBusState({
                ...newBusState,
                // "id": storeAssets.businesses.length += 1,
                "name": e.target.value
            })} type="text"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "downPay": e.target.value
            })} type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cost": e.target.value
            })}type="number" min="0" step="100"></input>

            <input onInput={e=>setNewBusState({
                ...newBusState,
                 "cashflow": e.target.value
            })}type="number" step="50"></input>
            <br></br>
            <input type="submit" value="Submit" />
    
        </form>
        <hr></hr>


      
        </OrangeBox>
         
        </>
    )
}

export default Assets