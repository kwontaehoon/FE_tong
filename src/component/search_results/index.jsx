import React from 'react'
import {Container,
Search_Box,
Input_Box,
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
                <img style={{ marginLeft: "16px" }} src="svg/search_1.svg"></img>
            </Magnifier>
            <Results>
                <Ikon>
                    <img src="svg/Frame 169.svg"></img>
                </Ikon>
                <Text>검색결과가 없습니다</Text>
            </Results>

        </Container>
    )
}

export default index