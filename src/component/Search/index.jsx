import React from 'react'
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
    Tag_Box_color,
    Tag,
    Text,
    Cancellation
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
            <Search_Word>
                추천검색어
            </Search_Word>
            <Recommendation_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box_color>
                    LoremLoremLorem
                </Tag_Box_color>
                <Tag_Box>
                    <Text>LoremLo</Text>
                </Tag_Box>
            </Recommendation_Box>
            <Recommendation_Box>
                <Tag>
                    <Text>LoremLorem</Text>
                </Tag>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
            </Recommendation_Box>
            <Recommendation_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>


            </Recommendation_Box>
        </Container>
    )
}

export default index