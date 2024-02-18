import React from 'react'
import {Container,
Search_Box,
Input_Box,
Search_results,
Results,
Text,
Ikon,
Cancellation,
Search,
Input,
Magnifier,

} from './styles'
const index = () => {
  return (
        <Container>
            <Search_Box>
                <Search>
                    <Input_Box>
                        <Input placeholder='검색어를 입력하세요'></Input></Input_Box>
                </Search>
                <Cancellation>취소</Cancellation>
            </Search_Box>
            <Magnifier>
                <img src="svg/search.svg"></img>
            </Magnifier>
            <Search_results>
                <Results>
                    <Ikon>
                        <img src="svg/Frame 169.svg"></img>
                    </Ikon>
                    <Text>검색결과가 없습니다</Text>
                </Results>
            </Search_results>
        </Container>
    )
}

export default index