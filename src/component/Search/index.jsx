import React from 'react'
import {
    Container,
    Search,
    Search_Box,
    Search_Word,
    Search_Ikon,
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
            <Search>
                <Search_Ikon>
                    <img src="svg/search.svg"></img>
                </Search_Ikon>
                <Search_Box placeholder='검색어를 입력하세요'></Search_Box>

                <Cancellation>
                    취소
                </Cancellation>
            </Search>
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