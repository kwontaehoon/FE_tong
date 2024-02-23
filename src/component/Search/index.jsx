import React, { useState, useEffect } from 'react'
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
import { useSearchRecommendListQuery, useSearchResultListMutation } from '../../hooks/queries/api/Search'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();

    const { data: recommendList, isSuccess } = useSearchRecommendListQuery();
    console.log("recommendList: ", recommendList);

    const { mutateAsync: result, data: resultList } = useSearchResultListMutation();
    console.log("resultList: ", resultList);

    const [info, setInfo] = useState('');

    useEffect(()=>{
        if(resultList && info !== '' && resultList?.data?.length !== 0){
            navigate("/reservation", { state: info });
        }
    }, [resultList]);

    return isSuccess && (
        <Container>
            <Search_Box>
                <Search>
                    <Input_Box>
                        <div className='absolute left-4'>
                            <img src="/svg/search.svg" />
                        </div>
                        <Input placeholder='검색어를 입력하세요' 
                            value={info}
                            onChange={(e)=>setInfo(e.target.value)}
                            onKeyDown={(e)=>{
                                if(e.key === 'Enter'){
                                    result({title: info});
                                }
                                }}>
                        </Input>
                        <img src="/svg/InputClose.svg" className='mr-4' onClick={()=>setInfo('')}/>
                    </Input_Box>
                </Search>
                <Cancellation onClick={()=>navigate(-1)}>취소</Cancellation>
            </Search_Box>
    
            {resultList && resultList?.data?.length == 0 && <div className='flex items-center flex-col mt-12'>  
                <img src="svg/Frame 169.svg"></img>
                <div className='text-xl text-grey06 my-4'>검색결과가 없습니다.</div>
            </div>}
            {recommendList.length == 0 ? '' : <Search_Word>추천검색어</Search_Word>}
            <Recommendation_Box>
                {recommendList.map(x=>{
                    return (
                        <Tag_Box key={x.searchId} onClick={()=>result({title: x.content})}>{x.content}</Tag_Box>
                    )
                })}
            </Recommendation_Box>
        </Container>
    )
}

export default index