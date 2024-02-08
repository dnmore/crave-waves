import styled from "styled-components";

export const InputContainer = styled.div `
display: flex;
flex-direction: column;
margin: 20px auto;
`

export const InputLabel = styled.label `
margin-bottom: 5px;
`
export const Input = styled.input `
font: inherit;
padding: 8px 5px;
background-color: white;
border: none;
border-bottom: 1px solid grey;

&:focus {
  outline: none;
}
`
