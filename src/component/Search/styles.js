import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
`
export const Search_Box = styled.div`
    height: 88px;
    display: flex;
    align-items: center;
    
`
export const Search = styled.div`
    width: 85%;
    height:  48px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color:#e9ebed;
`
export const Input = styled.input`
    width: 90%;
    height: 30px;
    margin-left: 50px;
    background-color:#e9ebed;
`
export const Input_Box = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    flex: 1;
    margin-right: 6px;
`
export const Magnifier = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    bottom: 55px;
    left: 5px;
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
    margin-bottom: 10px;

`
export const Recommendation_Box = styled.div`
    height: 41px;
    display: flex;
    margin-top: 10px;
    
`
export const Tag_Box = styled.div`
    width: 20%;
    height: 36px;
    margin-right: 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CACACA;

`
export const Tag_Box_color = styled.div`
    width: 45%;
    height: 36px;
    margin-right: 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #007CFF;
    border: 1px solid #CACACA;
    color: white;
    cursor: pointer;

`

export const Tag = styled.div`
    width: 30%;
    height: 36px;
    border-radius: 100px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CACACA;
`
export const Text = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
`