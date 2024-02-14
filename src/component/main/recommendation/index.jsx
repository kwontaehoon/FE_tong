import React from 'react'
import {Container,
    Recommendation,
IMG_Box,
Name_Box,
IMG_Name,
Name,
IMG} from './styles'

const index = () => {
    return (
        <Container>
            < Recommendation>
                <IMG_Box>
                    <IMG>
                        <img src="svg/Team_4.svg"></img>
                    </IMG>
                    <Name_Box>
                        <IMG_Name>
                            #김포 핫플은 요즘 여기
                        </IMG_Name>
                        <Name>한겨울에도 결코 춥지 않아...</Name>
                    </Name_Box>

                </IMG_Box>
                <IMG_Box>
                    <IMG>
                        <img src="svg/Restaurant.svg"></img>
                    </IMG>
                    <Name_Box>
                        <IMG_Name>
                            #운통장 추천맛집!!!
                        </IMG_Name>
                        <Name>이달의 맛집 탐방</Name>
                    </Name_Box>
                </IMG_Box>
            </Recommendation>
        </Container>
    )
}

export default index