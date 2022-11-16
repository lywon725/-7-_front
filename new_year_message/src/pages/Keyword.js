import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import * as K from '../styles/KeywordButton';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addText, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";

//material UI
import ReplayIcon from '@mui/icons-material/Replay';

const TextBox = styled.div`
position: absolute;
width: 332px;
height: 162px;
left: 29px;
top: 252px;

background: #F8F9FF;
/* light purple */

border: 1px solid #B9ADFF;
border-radius: 17.5132px;
`
const Message = styled.input`
border: 0px;
background: transparent;
width: 80%;
height: 20%;
margin-left: 2px;
margin-top: 24px;
`

const RePlay = styled.div`
position: absolute;
left: 340px;
top: 470px;
`
const RandomButton = styled.button`
border: none;
position: absolute;
width: 49px;
height: 24px;
left: 299px;
top: 266px;

background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(185, 173, 255, 0.1);
border-radius: 15.6686px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 13px;

color: #4B4B4B;
`
function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });
    return (
        <S.Wrapper>
        <S.Text>키워드를 활용하여 <br/>메시지를 작성해주세요</S.Text>
        <TextBox>
            <Message value = {inputvalue} type="text" placeholder="메시지" onChange={(event)=>setinputvalue(event.target.value)}/>
        </TextBox>
        <RandomButton>랜덤</RandomButton>
        <RePlay><ReplayIcon/></RePlay>
        <K.KeywordBox1>아쉽다</K.KeywordBox1>
        <K.KeywordBox2>내년에는</K.KeywordBox2>
        <K.KeywordBox3>건강하게</K.KeywordBox3>
        <K.KeywordBox4>나는</K.KeywordBox4>
        <K.KeywordBox5>더 나은</K.KeywordBox5>
        <K.KeywordBox6>행복한</K.KeywordBox6>
        <K.KeywordBox7>사랑해</K.KeywordBox7>
        <K.KeywordBox8>좋아해</K.KeywordBox8>
        <K.KeywordBox9>믿을게</K.KeywordBox9>
        <K.KeywordBox10>Happy</K.KeywordBox10>
        <K.KeywordBox11>진짜</K.KeywordBox11>
        <K.KeywordBox12>올해가</K.KeywordBox12>

        <S.BigButton onClick={() => (dispatch(addText(inputvalue)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/email"/> )}  
        </S.Wrapper>
    )
}

export default Mainpage
