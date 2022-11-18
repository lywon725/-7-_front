import React from 'react'
import styled from 'styled-components';


const Box = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(185, 173, 255, 0.1);
border-radius: 10px;
width: 251px;
//position: absolute;
margin-left: 25px;
`
const Content = styled.h3`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 20px;
color: #8571FF;

text-align: left;
padding-left: 15px;
padding-right: 15px;
margin-bottom: 5px;
margin-top: 3px;


`

const Writer = styled.h4`

text-align: left;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 13px;
color: #4B4B4B;
margin-top: 10px;
padding-left: 15px;
padding-bottom: 15px;
`
const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 20px;
color: #8571FF;

text-align: left;
padding-left: 15px;
padding-top: 15px;
padding-right: 15px;
`
function MessgaeCard({title,text, nickname}) {
    return (
        <>
        <Box>
        <Title>{title}</Title>
        <Content>{text}</Content>
        <Writer>작성자:{nickname}</Writer>
        </Box>
        </>
    )
}

export default MessgaeCard
