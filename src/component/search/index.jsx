import React, { useState, useEffect } from 'react'
import {
    Container,
    Search,
    Search_Box,
    Input,
    Input_Box,
    Search_Word,
    Recommendation_Box,
    Tag_Box,
    Cancellation
} from './styles'
import { useSearchRecommendListQuery, useSearchResultListMutation } from '../../hooks/queries/api/Search'
import { useNavigate } from 'react-router-dom'
import Header from '../../function/header'

const index = () => {

    const navigate = useNavigate();

    const { data: recommendList, isSuccess } = useSearchRecommendListQuery();

    const { mutateAsync: result, data: resultList } = useSearchResultListMutation();

    const [info, setInfo] = useState('');

    const [closeIcon, setCloseIcon] = useState(false);

    useEffect(()=>{
        if(resultList && info !== '' && resultList?.data?.length !== 0){
            navigate(`${info}`);
        }
    }, [resultList]);

    return isSuccess && (
        <Container>
            <Header title="검색" />
            <Search_Box>
                <Search>
                    <Input_Box>
                        <div className='absolute left-4'>
                            <img src="/svg/search.svg" />
                        </div>
                        <Input placeholder='검색어를 입력하세요' 
                            value={info}
                            onFocus={()=>{
                                setCloseIcon(true);
                            }}
                            // onBlur={()=>{
                            //     setCloseIcon(false);
                            // }}
                            onChange={(e)=>setInfo(e.target.value)}
                            onKeyDown={(e)=>{
                                if(e.key === 'Enter'){
                                    result({title: info});
                                }
                                }}>
                        </Input>
                        {/* {closeIcon &&<img src="/svg/InputClose.svg" className='mr-4' onClick={()=>{setInfo(''); setCloseIcon(false)}} />} */}
                    </Input_Box>
                </Search>
            </Search_Box>
    
            {resultList && resultList?.data?.length == 0 && <div className='flex items-center flex-col mt-12'>  
                <img src="/svg/Frame 169.svg"></img>
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