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
Colse
} from './styles'
const index = () => {
  return (
        <Container>
            <Search_Box>
                <Search>
                    <Magnifier>
                        <img src="svg/search.svg"></img>
                    </Magnifier>
                    <Input_Box>
                        <Input placeholder='검색어를 입력하세요'></Input>
                    </Input_Box>
                    <Cancellation>취소</Cancellation>
                    <Colse>
                    <img src="svg/close.svg"></img>
                    </Colse>
                </Search>
            </Search_Box>
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