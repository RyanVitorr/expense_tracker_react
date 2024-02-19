import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    box-shadow:  0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    margin-top: 15px;
`;

export const DivP = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 10px;
    gap: 25px;
`;

export const Label = styled.label``;

export const Select = styled.select``;

export const Option = styled.option``;

export const Button = styled.button`
    padding: 0 10px;
    height: 25px;
    width: 100px;
    border-radius: 8px;
    border: none;
    box-shadow:  0px 0px 5px #CCC;
    background-color: lightgreen;
    margin-top: 20px;
    cursor: pointer;
`;