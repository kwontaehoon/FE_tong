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
    Text
} from './styles'

const index = () => {
    return (
        <Container>
            <Search>
                <Search_Box placeholder='검색어를 입력하세요'></Search_Box>
                <Search_Ikon>
                    <img src="svg/search.svg"></img>
                </Search_Ikon>
            </Search>
            <Search_Word>
                추천검색어
            </Search_Word>
            <Recommendation_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag>
                    <Text>LoremLoremLorem</Text>
                </Tag>
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
            </Recommendation_Box>

            <Recommendation_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box>
                    <Text>Lorem</Text>
                </Tag_Box>
                <Tag_Box_color>
                    <Text>Lorem</Text>
                </Tag_Box_color>


            </Recommendation_Box>
        </Container>
    )
}

export default index