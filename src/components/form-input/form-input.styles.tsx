import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
`;
export const Input = styled.input`
  font: inherit;
  padding: 8px 5px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  width: 250px;
  height: 50px;

  &:focus {
    outline: none;
  }
`;
