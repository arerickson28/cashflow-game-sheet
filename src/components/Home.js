import React from "react"
import CashflowGameSheetImage from "../images/cashflow-sheet-from-web.jpeg"
import styled from "styled-components"


function Home() {

    const Image = styled.img`
        width: 1000px;
    `

    return (
        <>
            <Image src= {CashflowGameSheetImage}></Image> 
        </>
    )
}

export default Home