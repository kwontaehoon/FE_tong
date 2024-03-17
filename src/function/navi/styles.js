import styled from "styled-components";

export const Icon = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 900;
    padding: 21px 10px;
    box-shadow: 0px -2px 20px 0px rgba(0, 0, 0, 0.05);

    @media (min-width: 768px) {
        width: 400px;
        margin-left: 40px;
        margin-bottom: 40px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        position: absolute;
    }
`
export const Icon_Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
`
export const Home_Box = styled.div`
    position: relative;
    bottom: 50px;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Home = styled.div`
    width: 53px;
    height: 53px;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Home_Name = styled.div`
    font-size: 14px;
    text-align: center;
    margin-top: 8px;
`
export const House = styled.div`
    font-size: 14px;
    white-space: nowrap;
    font-weight: 500;
    margin-top: 2px;
`