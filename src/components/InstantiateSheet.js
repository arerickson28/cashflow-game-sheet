import React, { useState } from "react"
import styled from "styled-components"


const PinkBox = styled.div`
    border: solid 4px rgb(255,182,193);
    padding: 5px;
    margin: 10px;
    `

function InstatiateSheet() {

    return (
        <>
            <PinkBox>
                <h2>This is the InstatiateSheet component</h2>
                <h3>Profession</h3>
                <h3>Salary</h3>
                <h3>Cashflow</h3>
                <h3>Savings</h3>
                <h3>Per Child Expense:</h3>
                <h3>Taxes</h3>
                <h3>Mortgage/Rent</h3>
                <h3>School Loans</h3>
                <h3>Car Payment</h3>
                <h2>Liabilities</h2>
                <h3>Mortgage</h3>
                <h3>School Loans</h3>
                <h3>Car Loans</h3>
                <h3>Credit Cards</h3>
                <h3>Retail Debt</h3>

            </PinkBox>
        </>
    )
}

export default InstatiateSheet