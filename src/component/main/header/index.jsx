import React from 'react'
import {
    Container,
    Gimpo,
    Playground,
    Lightning,
} from './styles'

const index = () => {
    return (
        <Container>
            <Gimpo>
                <Playground>
                    <img src="/svg/Logo.svg" />
                </Playground>
                <Lightning>
                    <img src="/svg/search.svg"></img>
                </Lightning>

                < Lightning>
                    <img src="/svg/Lightning.svg"></img>
                </Lightning>
            </Gimpo>
        </Container>
    )
}

export default index