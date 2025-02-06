import styled from "styled-components";

export const FormContainer = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CardElementWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 10px;
  min-width: 300px;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
