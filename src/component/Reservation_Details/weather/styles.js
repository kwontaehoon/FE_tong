import styled from "styled-components";

export const Container = styled.div`
        margin-top: 16px;
`
export const Weather_Box = styled.div`
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding: 16px 22px;
        margin-bottom: 10px;
        background-color: white;
`
export const Time_Container = styled.div`
        border-radius: 8px;
        background-color: white;
        padding: 20px 14px;
        margin-bottom: 12px;
`
export const Time_Choice = styled.div`
        font-size: 16px;
        font-weight: 600;
`
export const Time_Box = styled.div`
        display: flex;
        margin-top: 15px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
                display: none;
        }
`
export const Time_Text = styled.div`
        border: 1px solid;
        border-radius: 8px 0px 0px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
`
export const Text = styled.div`
        font-size: 13px;
        margin: 0px 5px 0px 5px;
`
export const Time = styled.div`
        padding: 6px 10px;
        margin-bottom: 8px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
`
export const Personnel_Box = styled.div`
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding: 16px 10px;
        background-color: white;
`
export const Choice = styled.div`
        width: 50px;
        height: 30px;
        border: 1px solid;
`
export const Personnel = styled.div`
        font-weight: 600;
        margin-left: 10px;
`
export const Max_Box = styled.div`
        width: 60px;
        height: 30px;
        display: flex;
        flex: 1;
        align-items: center;
`
export const Max = styled.div`
        font-size: 12px;
        color: gray;
        margin-left: 5px;
`
export const Number = styled.div`
        margin: 0px 6px 0px 10px;
        text-align: center;
        color: #007CFF;
`
export const Choice_Box = styled.div`
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
`