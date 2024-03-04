import styled from "styled-components";

export const Container = styled.div`
    margin-top: 18px;
    background-color: white;
    border-radius: 8px;
    padding: 20px 20px;
    padding-bottom: 2px;
`
export const Scroll = styled.div`
    margin: 18px 0px;
    overflow: scroll;
    white-space: nowrap;
    display: flex;
    padding-bottom: 18px;

    &::-webkit-scrollbar {
        display: none;
    }
`