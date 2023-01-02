import React, {useEffect} from "react"
import styled from "styled-components"
import store from "store"
import { useShareMyStates, newChildExpenses, newTotalExpenses, newCashflow, newTotalIncome, newTotalPassiveIncome, blankSheet, testSheet, storeAssets, storeExpenses, storeCashflow, storeIncome } from "../Data/dataFunc"





const PinkBox = styled.div`
    border: solid 4px rgb(255,182,193);
    padding: 5px;
    margin: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MyFormDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const InputDiv = styled.div`
    width: 200px;
    border: solid;
    border-width: 2px;
    border-color: rgb(255,182,193);
    padding: 15px;
    margin: 5px;
`


function InstantiateSheet() {

    const { instantiateSheetState, setInstantiateSheetState, setNewSheetBtn, setExpensesState, setCashflowState, setIncomeState } = useShareMyStates()
    console.log("Instantiate sheet component rendered")
    // useEffect(() => {
    //     storeExpenses.totalExpenses = newTotalExpenses()
    //     store.set("expenses", storeExpenses)
    //     setExpensesState(storeExpenses)
     
    //     storeCashflow.cashflow = newCashflow()
    //     store.set("cashflow", storeCashflow)
    //     setCashflowState(storeCashflow)

    //     storeIncome.totalIncome = newTotalIncome()
    //     store.set("income", storeIncome)
    //     setIncomeState(storeIncome)
    //   });

    function validateForm(e) {
        e.preventDefault()
        let inputs = document.querySelectorAll("input")
        console.log(inputs)

        for (let i=0; i<inputs.length; i++) {
            if (inputs[i].value == "" || parseInt(inputs[i].value) == NaN) {
                inputs[i].classList.add("invalid")
                inputs[i].reset()
                console.log(inputs[i].classList)
                alert("Please enter a number for all fields");
                return
              } else {
                inputs[i].classList.remove("invalid")
              }
        }
        // handleSheetSubmit()
       
    }

    function handleSheetSubmit(e) {
        e.preventDefault()
        // validateForm()

        console.log("sheet submittd")
        console.log(instantiateSheetState)
        alert("Info Submitted, head to GameSheet!")
     
        // store.set("profession", instantiateSheetState.sheetProfession)
        store.set("profession", e.target.profession.value)

        // store.set("assets", instantiateSheetState.sheetAssets)
        // store.set("liabilities", instantiateSheetState.sheetLiabilities)

        // store.set("income", instantiateSheetState.sheetIncome)
        let tempStoreIncome = storeIncome
        tempStoreIncome.monthlySalary = e.target.monthlySalary.value
        store.set("income", tempStoreIncome)
        

        // store.set("expenses", instantiateSheetState.sheetExpenses)
        // store.set("cashflow", instantiateSheetState.sheetCashflow)

        let tempStoreAssets = storeAssets
        tempStoreAssets.cash = e.target.savings.value
        store.set("assets", tempStoreAssets)

        let tempStoreExpenses = storeExpenses
        tempStoreExpenses.perChildExpense = e.target.perChildExp.value
        tempStoreExpenses.taxes = e.target.taxes.value

        store.set("expenses", tempStoreExpenses)



        storeExpenses.totalExpenses = newTotalExpenses()
        store.set("expenses", storeExpenses)
        setExpensesState(storeExpenses)
     
        storeIncome.totalIncome = newTotalIncome()
        store.set("income", storeIncome)
        setIncomeState(storeIncome)

        let tempStoreCashflow = storeCashflow
        tempStoreCashflow.cashflow = newCashflow()
        store.set("cashflow", tempStoreCashflow)
        setCashflowState(storeCashflow)

        setInstantiateSheetState(blankSheet)
        window.location.reload()
       
        setNewSheetBtn(false)
      
    }

    return (
        <>
            <PinkBox className="PinkBox">
           
                <MyForm name="MyForm" className="MyForm" onSubmit={handleSheetSubmit}>
                <h1>Submit Info To Begin New Gamesheet</h1>
                    <MyFormDiv className="MyFormDiv">
           

                    <InputDiv>
                        <h3>Profession</h3>
                        {/* <input id="profession" onChange={e => {
                        console.log(e.target.value)
                        setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetProfession": e.target.value
                        })}}></input> */}
                        <input id="profession" name="profession"></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Monthly Salary</h3>
                        {/* <input type="number" onChange={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetIncome": {
                                ...instantiateSheetState.sheetIncome,
                                "monthlySalary": parseInt(e.target.value)
                            }
                        })}></input> */}
                        <input id="monthlySalary" name="monthlySalary"></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Savings</h3>
                        {/* <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetAssets": {
                                ...instantiateSheetState.sheetAssets,
                                "cash": parseInt(e.target.value)
                            }
                        })}></input> */}
                          <input id="savings" name="savings"></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Per Child Expense</h3>
                        {/* <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "perChildExpense": parseInt(e.target.value)
                            }
                        })}></input> */}
                          <input id="perChildExp" name="perChildExp"></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Taxes</h3>
                        {/* <input type="number" onInput={e => {
                            console.log(e.target.value)
                            setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "taxes": parseInt(e.target.value)
                            }
                        })}}></input> */}
                        <input id="taxes" name="taxes"></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Mortgage/Rent</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "homeMortgagePayment": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>School Loan Payment</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "schoolLoanPayment": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Car Loan Payment</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "carPayment": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Credit Card Payment</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "creditCardPayment": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Retail Debt Payment</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "retailPayment": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Other Expenses</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "otherExpenses": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Mortgage</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetLiabilities": {
                                ...instantiateSheetState.sheetLiabilities,
                                "homeMortgage": {
                                    ...instantiateSheetState.sheetLiabilities.homeMortgage,
                                    "balance": parseInt(e.target.value)
                                }
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>School Loans</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetLiabilities": {
                                ...instantiateSheetState.sheetLiabilities,
                                "schoolLoans": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Car Loans</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetLiabilities": {
                                ...instantiateSheetState.sheetLiabilities,
                                "carLoans": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Credit Card Debt</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetLiabilities": {
                                ...instantiateSheetState.sheetLiabilities,
                                "creditCards": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Retail Debt</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetLiabilities": {
                                ...instantiateSheetState.sheetLiabilities,
                                "retailDebt": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>

                    </MyFormDiv>
                    <br></br>
                    <PinkBox>
                    <input type="submit" value="Submit" />
                    </PinkBox>
                   
                </MyForm>

            </PinkBox>

        </>
    )
}

export default InstantiateSheet