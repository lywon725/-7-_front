import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import MessgaeCard_Left from '../components/Message/MessgaeCard_Left';
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
    //리덕스에 있는 state 가져오기
    let a = useSelector((state) => { return state.user } )

    //[목표] 오늘이 1.1일 이후면 true보여주기 아니면 안보여주기
    const [isNewYear, setNewYear] = useState(true);
    //오늘 날짜 할당
    const day = new Date();     
    const todate = day.getDate();
    //todate == 1 ? setNewYear(true) : setNewYear(false);
    console.log(todate);

    //api 가져오기 
    const [messages, setMessages] = useState([]);

    return isNewYear ? (
        <S.Wrapper>
            {console.log(a)}

            <S.Text>메시지 보기</S.Text>
            <MessgaeCard_Left
                text={a.text}
                nickname={a.nickname}
            />
        </S.Wrapper>
    ):(
        <>
            <S.Text>아직 신년이 아니예요!</S.Text>
        </>
    );
}

export default MCheck
