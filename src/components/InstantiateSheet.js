import React from "react"
import styled from "styled-components"
import store from "store"
import { useShareMyStates } from "../Data/dataFunc"
import CashflowCards from "../images/cashflowCards.jpeg"


const Image = styled.img`
width: 1000px;
margin: 10px;
`

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

    const { instantiateSheetState, setInstantiateSheetState, setNewSheetBtn } = useShareMyStates()



    store.set("profession", instantiateSheetState.sheetProfession)
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


        window.location.reload()

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

    return (
        <>
            <PinkBox className="PinkBox">
           
                <MyForm className="MyForm" onSubmit={handleSheetSubmit}>
                <h1>Submit Info To Begin New Gamesheet</h1>
                    <MyFormDiv className="MyFormDiv">
           

                    <InputDiv>
                        <h3>Profession</h3>
                        <input onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetProfession": e.target.value
                        })}></input>
                    </InputDiv>

                    <InputDiv>
                        <h3>Monthly Salary</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetIncome": {
                                ...instantiateSheetState.sheetIncome,
                                "monthlySalary": e.target.value
                            }
                        })}></input>
                    </InputDiv>

                


                    <InputDiv>
                        <h3>Savings</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetAssets": {
                                ...instantiateSheetState.sheetAssets,
                                "cash": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>


                 


                    <InputDiv>
                        <h3>Per Child Expense</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "perChildExpense": parseInt(e.target.value)
                            }
                        })}></input>
                    </InputDiv>


                    <InputDiv>
                        <h3>Taxes</h3>
                        <input type="number" onInput={e => setInstantiateSheetState({
                            ...instantiateSheetState,
                            "sheetExpenses": {
                                ...instantiateSheetState.sheetExpenses,
                                "taxes": parseInt(e.target.value)
                            }
                        })}></input>
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

            <Image src= {CashflowCards}></Image> 

        </>
    )
}

export default InstantiateSheet