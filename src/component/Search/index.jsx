import React, { useState } from 'react'
import {
    Container,
    Search,
    Search_Box,
    Input,
    Input_Box,
    Magnifier,
    Search_Word,
    Recommendation_Box,
    Tag_Box,
    Cancellation
} from './styles'
import { useSearchRecommendListQuery } from '../../hooks/queries/api/Search'

const index = () => {

    const { data, isSuccess } = useSearchRecommendListQuery();
    console.log("data: ", data);

    const [info, setInfo] = useState('');
    console.log("info: ", info);

    return isSuccess && (
        <Container>
            <Search_Box>
                <Search>
                    <Input_Box>
                        <Input placeholder='검색어를 입력하세요' value={info} onChange={(e)=>setInfo(e.target.value)}></Input>
                        <img src="/svg/InputClose.svg" className='mr-4' onClick={()=>setInfo('')}/>
                    </Input_Box>
                </Search>
                <Cancellation>취소</Cancellation>
            </Search_Box>
            <Magnifier>
                <img className='ml-4' src="svg/search_1.svg"></img>
            </Magnifier>
            <Search_Word>추천검색어</Search_Word>
            <Recommendation_Box>
                {data.map(x=>{
                    return (
                        <Tag_Box key={x.searchId}>{x.content}</Tag_Box>
                    )
                })}
            </Recommendation_Box>
        </Container>
    )
}

export default index