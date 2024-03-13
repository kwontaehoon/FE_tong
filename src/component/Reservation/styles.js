import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 102px;
    background-color: #F4F5FA;
`
export const Scroll = styled.div`
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 0px 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`
export const Tong_Tong = styled.div`
    padding: 20px;
    background-color: white;
`
export const Lorem = styled.div`
    font-size: 18px;
    font-weight: 700;
    flex: ${props => props.$category == 0 || props.$category == 1 ? '' : '1'};
`
export const Lorem_Text = styled.div`
     margin: 6px 0px 0px 0px;
     font-size: 12px;
     color: #737373;
`