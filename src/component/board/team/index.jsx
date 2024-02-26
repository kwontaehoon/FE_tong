import React from 'react'
import {
    Container,
    Choice_Box,
    Choice,
    Recruitment_Box,
    FC,
    FC_Box,
    Jangi_FC,
    Comments_Box,
    Comment,
    Activity,
} from './styles'

const index = () => {

    const dummy = Array(5).fill(0);

    return (
        <Container>
            <Choice_Box>
                <Choice>최신순</Choice>
                <img src="svg/down_arrow.svg"></img>
            </Choice_Box>
            {dummy.map((_, index) => {
                return (
                    <Recruitment_Box key={index}>
                        <FC_Box>
                            <FC>장기동 FC팀원 모집합니다.</FC>
                            <Jangi_FC>장기동 FC통통팀원 모집합니다. 매주 uuuuuklku</Jangi_FC>
                            <Comments_Box>
                                <img src="svg/eye.svg"></img>
                                <Comment>322</Comment>
                                <img src="svg/vertical_line.svg"></img>
                                <img style={{ paddingLeft: "6px" }} src="svg/comment.svg"></img>
                                <Comment>31</Comment>
                                <img src="svg/vertical_line.svg"></img>
                                <Activity>방금활동</Activity>
                            </Comments_Box>
                        </FC_Box>
                        <img src="svg/Teamwork_5.svg"></img>
                    </Recruitment_Box>
                )
            })}
        </Container>
    )
}

export default index