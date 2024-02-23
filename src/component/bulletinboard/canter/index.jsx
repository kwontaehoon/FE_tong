import React from 'react' 
import {Container,
Choice_Box,
Choice,
Recruitment_Box,
Recruitment_Jangi,
FC,
FC_Box ,
Jangi_FC,
Comments_Box,
Activity,
Button_Box,
Button,
Img,
Name,
Home_Name,
Home_Box,
Home,
Writing,
} from './styles' 

const index = () => {
    return (
        <Container>
            <Choice_Box>
                <Choice>최신순</Choice>
                <img src="svg/down_arrow.svg"></img>
            </Choice_Box>
            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        장기동 FC통통팀원 모집합니다. 매주 수요...
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        <img src="svg/comment.svg"></img> 31
                        <img src="svg/vertical_line.svg"></img>
                        <Activity>방금활동</Activity>
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork_5.svg"></img>
            </Recruitment_Box>
            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        장기동 FC통통팀원 모집합니다. 매주 수요일 14시 장기통...
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img> 1시간전
                    </Comments_Box>
                </FC_Box>
            </Recruitment_Box>
            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        안녕하세요. 김포운통장은 사용해보셨죠?
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img> 1시간전
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork.svg"></img>
            </Recruitment_Box>
            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        안녕하세요. 김포운통장은 사용해보셨죠?
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img> 1시간전
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork_2.svg"></img>
            </Recruitment_Box>

            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        안녕하세요. 김포운통장은 사용해보셨죠?
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img>
                        1시간전
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork_3.svg"></img>
            </Recruitment_Box>
            <Recruitment_Box>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        안녕하세요. 김포운통장은 사용해보셨죠?
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img> 1시간전
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork_4.svg"></img>
            </Recruitment_Box>
            <Recruitment_Jangi>
                <FC_Box>
                    <FC>장기동 FC팀원 모집합니다.</FC>
                    <Jangi_FC>
                        안녕하세요. 김포운통장은 사용해보셨죠?
                    </Jangi_FC>
                    <Comments_Box>
                        <img src="svg/eye.svg"></img> 322
                        <img style={{ marginLeft: "6px" }} src="svg/vertical_line.svg"></img>
                        31
                        <img style={{ marginRight: "6px" }} src="svg/vertical_line.svg"></img>1시간전
                    </Comments_Box>
                </FC_Box>
                <img style={{ marginRight: "15px" }} src="svg/Teamwork_4.svg"></img>
            </Recruitment_Jangi>
            <Button_Box>
                <Img>
                    <Button>
                        <img src="svg/Calendar.svg"></img>
                    </Button>
                    <Name>예약</Name>
                </Img>
                <Img>
                    <Button>
                        <img style={{ marginTop: "3px" }} src="svg/Smile.svg"></img>
                    </Button>
                    <Name>MY</Name>
                </Img>
                <Home_Box>
                    <Home>
                        <img style={{ width: "32px" }} src="svg/home_4.svg"></img>
                    </Home>
                    <Home_Name>홈</Home_Name>
                </Home_Box>
                <Img>
                    <Button>
                        <img src="svg/heart.svg"></img>
                    </Button>
                    <Name>찜</Name>
                </Img>
                <Img>
                    <Button>
                        <img src="svg/rectangles.svg"></img>
                    </Button>
                    <Name>카테고리</Name>
                </Img>
                <Writing>
                    <img src="svg/Pencil_Icon.svg"></img>
                </Writing>
            </Button_Box>
        </Container>
    )
}

export default index