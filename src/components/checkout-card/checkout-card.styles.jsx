import styled from "styled-components";

export const CheckoutCardContainer = styled.div `
width: 200px;
display: flex;
flex-direction: column;
border: 1px solid black;
`

export const CheckoutCardImage = styled.div `
height: 200px;
overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`

export const CheckoutCardBody = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`

export const Quantity = styled.div `
display: flex;
align-items: center;
gap: 20px;
`

export const QuantityButton = styled.button `
border: none;
background-color: transparent;
font: inherit;
font-weight: bold;
cursor: pointer;
`
