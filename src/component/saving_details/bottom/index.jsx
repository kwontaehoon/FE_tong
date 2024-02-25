import React from 'react'
import {Container,
Exchange,
Exchange_Text,
Comment_Box,
Comment,
Nickname,
Hi,
Days,
Reply,
Input_Box,
Input,
Send
} from './styles'

const index = () => {
  return (
    <Container>
        <Exchange>
        <img style={{width:"18px"}}src="svg/Whiteheart.svg"></img>
        <Exchange_Text>좋아요 1</Exchange_Text>
        <img style={{width:"18px"}}src="svg/comment.svg"></img>
        <Exchange_Text>댓글 1</Exchange_Text>
        </Exchange>
        <Comment_Box>
        <img style={{width:"48px",marginLeft:"10px"}}src="svg/Ikon.svg"></img>
        <Comment>
            <Nickname>통통이</Nickname>
            <Days>2024.02.24</Days>
        </Comment>
        <Comment>
        <Hi>안녕하세요</Hi>
        <Reply>답글하기</Reply>
        </Comment>
        </Comment_Box>

        <Comment_Box>
        <img style={{width:"32px",marginLeft:"20px"}}src="svg/Ikon.svg"></img>
        <Comment>
        <Nickname>통통이</Nickname>
        <Days>2024.02.24</Days>
        </Comment>
        <Comment>
        <Hi>안녕하세요</Hi>
        <Reply>답글하기</Reply>
        </Comment>
        </Comment_Box>

        <Comment_Box>
        <img style={{width:"32px",marginLeft:"20px"}}src="svg/Ikon.svg"></img>
        <Comment>
        <Nickname>통통이</Nickname>
        <Days>2024.02.24</Days>
        </Comment>
        <Comment>
        <Hi>안녕하세요</Hi>
        <Reply>답글하기</Reply>
        </Comment>
        </Comment_Box>
        
        <Comment_Box>
        <img style={{width:"48px",marginLeft:"10px"}}src="svg/Ikon.svg"></img>
        <Comment>
        <Nickname>통통이</Nickname>
        <Days>2024.02.24</Days>
        </Comment>
        <Comment>
        <Hi>안녕하세요</Hi>
        <Reply>답글하기</Reply>
        </Comment>
        </Comment_Box>

        <Comment_Box>
        <img style={{width:"48px",marginLeft:"10px"}}src="svg/Ikon.svg"></img>
        <Comment>
        <Nickname>통통이</Nickname>
        <Days>2024.02.24</Days>
        </Comment>
        <Comment>
        <Hi>안녕하세요</Hi>
        <Reply>답글하기</Reply>
        </Comment>
        </Comment_Box>
        <Input_Box>
        <Input placeholder='댓글을 입력하세요'></Input>
        <Send>
            <img src="svg/Send.svg"></img>
        </Send>
         </Input_Box>
       
    </Container>
  )
}

export default index