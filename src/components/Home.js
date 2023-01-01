import React from "react"
import CashflowGameSheetImage from "../images/cashflow-sheet-from-web.jpeg"
import CashflowCards from "../images/cashflowCards.jpeg"
import styled from "styled-components"


function Home() {

    const Image1 = styled.img`
        width: 1000px;
    `

    const Image2 = styled.img`
        width: 1000px;
    margin: 10px;
    `

    return (
        <>
            <Image1 src= {CashflowGameSheetImage}></Image1> 
            <Image2 src= {CashflowCards}></Image2> 
        </>
    )
}

export default Home