import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

import {useSelector, useDispatch} from "react-redux"

const Box = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(185, 173, 255, 0.1);
border-radius: 10px;
width: 251px;
position: absolute;
margin-left: 25px;
display:
`
const Content = styled.h3`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #8571FF;

text-align: left;
padding-left: 15px;
margin-bottom: 5px;

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

`

function MCheck() {
    let a = useSelector((state) => { return state.user } )
    return (
        <S.Wrapper>
        {console.log(a)}

        <S.Text>메시지 보기</S.Text>
        <Box>
        <Content>{a.text}</Content>
        <Writer>작성자:{a.nickname}</Writer>
        </Box>
        </S.Wrapper>
    )
}

export default MCheck
