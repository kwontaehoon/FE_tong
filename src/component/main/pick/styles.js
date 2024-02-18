import styled from "styled-components";

export const Container = styled.div`
    margin-top: 18px;
    border-radius: 15px;
`
export const Ground_Pick = styled.div`
    display: flex;
    margin-bottom: 18px;
`
export const Ground = styled.div`
    font-size: 20px;
    white-space: nowrap;
    font-weight: 700;
    
`
export const Pick = styled.div`
    margin-left: 5px;
    font-size: 20px;
    white-space: nowrap;
    color: #00D4EA;;
    font-weight: 700;
`

export const PickContent = styled.div`
    background-color: ${props => props.$flag ? '#007CFF' : ''};
    border: 1px solid;
    color: ${props => props.$flag ? 'white' : ''};
    font-size: 16px;
    border-radius: 30px;
    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 12px;
`
export const Scroll = styled.div`
    white-space: nowrap;
    overflow-x: scroll;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
`