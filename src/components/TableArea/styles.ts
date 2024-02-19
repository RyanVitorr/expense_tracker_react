import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px 10px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 10px 5px;
    text-align: left;
    gap: 10px;
    width: auto;

    @media (min-width: 700px) {
        width: ${props => props.width ? `${props.width}rem` : 'auto'};
    }

`;
