import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

import MessgaeCard_Left from '../components/Message/MessgaeCard_Left';
import MessgaeCard_Right from '../components/Message/MessgaeCard_Right';
import DumyArrray from '../components/Message/DumyArray';
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

const MessageArray = [
    {
        id:1,
        nickname:'철수',
        text:'행복해지길 바래요.인생은 원래 행복할려고 사는거죠 긏쵸? 맞죠잉 우웅웅우우우우우웅웅웅웅웅우우우'
    },
    {
        id:2,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:3,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:4,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:5,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:6,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:7,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:8,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        id:9,
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    },
    {
        nickname:'철수',
        text:'행복해지길 바래요.'
    }

]

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
            {MessageArray.map((dum)=>{
                if(dum.id%2 == 1){
                    return(
                        <MessgaeCard_Left
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                    );
                }else {
                    return(
                        <MessgaeCard_Right
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                    );
                }
                
            })}
        </S.Wrapper>
    ):(
        <>
            <S.Text>아직 신년이 아니예요!</S.Text>
        </>
    );
}

export default MCheck
