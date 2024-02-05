import React from 'react'
import {
    Container,
    Gimpo,
    Playground,
    Tong,
    Lightning,
} from './styles'

const index = () => {
    return (
        <Container>
            <Gimpo>
                <Playground>
                    김포운
                    <Tong>통</Tong>
                    장
                </Playground>
                <Lightning>
                    <img src="svg/Lightning.svg"></img>
                </Lightning>

                < Lightning>
                    <img src="svg/Lightning.svg"></img>
                </Lightning>
            </Gimpo>
        </Container>
    )
}

export default index