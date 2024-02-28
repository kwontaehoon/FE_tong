import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 20px 20px 20px;
    background-color: white;
    height: 100%;
`
export const Search_Box = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;
`
export const Search = styled.div`
    width: 100%;
    height:  48px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color:#F4F5FA;
`
export const Input_Box = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    flex: 1;
    margin-right: 6px;
    position: relative;
`
export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-left: 50px;
    margin-right: 10px;
    background-color:#F4F5FA;
`
export const Search_results = styled.div`
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
export const Cancellation = styled.div`
    font-size: 16px;
    margin-left: 16px;
`
export const Search_Word = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
`
export const Recommendation_Box = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
`
export const Tag_Box = styled.div`
    margin-right: 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CACACA;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 12px;
    padding: 8px 16px;
`