import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Sub from './Sub'


// 리렌더링
// 1. state 변경
// 2. props 변경
const Rendering1 = () => {

    const [state, setState] = useState();


    const value = { a: 1 };

    const memoiztionValue = useMemo(() => {
        return value;
    }, []);

    const memoiztionCallback = useCallback(() => {
        
    }, []);

    // 리액트는 렌더링 과정에서 2가지 페이즈를 거친다.
    // render phase: vitual DOM을 만들고, 실제 DOM과 비교해서 업데이트가 필요한 부분을 찾는다
    // commit phase: props, state

    useEffect(() => {
        setTimeout(() => {
            setState(1);
            console.log("update");
        }, 1000);
    }, []);

    return (
        <div>
            <Sub onClick={memoiztionCallback} value={memoiztionValue}/>
        </div>
    )
}

export default Rendering1