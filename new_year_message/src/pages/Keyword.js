import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import * as K from '../styles/KeywordButton';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addText, ChangeState, plusText, resetText} from '../redux/store'
import { Navigate } from "react-router-dom";

//material UI
import ReplayIcon from '@mui/icons-material/Replay';

//키워드 json 데이터
import Keyword from '../api/KeywordData.json';

const TextBox = styled.div`
position: absolute;
width: 332px;
height: 162px;
left: 29px;
top: 160px;

background: #F8F9FF;
/* light purple */

border: 1px solid #B9ADFF;
border-radius: 17.5132px;
z-index:0;
`
const Message = styled.textarea`
border: 0px;
background: transparent;
width: 90%;
height: 70%;
margin-left: 0px;
margin-top: 35px;
font-display: top;
`

const RePlay = styled.button`
position: absolute;
left: 340px;
top: 340px;
border: none;
background: transparent;
`
const RandomButton = styled.button`
border: none;
position: absolute;
width: 49px;
height: 24px;
left: 299px;
top: 170px;

background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(185, 173, 255, 0.1);
border-radius: 15.6686px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 13px;

color: #4B4B4B;

//커서 올렸을때 색상변화
&: hover{
    background: #B9ADFF;
    color:#FFFF;
}
`
const SelectText = styled.div`
position: absolute;
margin-top: 40px;
width: 80%;
margin-left: 32px;
z-index: 3;
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

    //keyword
    let [i, setIndex] = useState(0)
    const [text, setText] = useState('')
    let message = ''
    const MakeMessage = () => {
        
    }
    return (
        <S.Wrapper>
        <S.Text>키워드를 활용하여 <br/>메시지를 작성해주세요</S.Text>
        <TextBox>
            <Message value = {inputvalue} type="text" placeholder="메시지" onChange={(event)=>setinputvalue(event.target.value)}/>
            <p> {message}</p>
        </TextBox>

        <RandomButton onClick={() => (dispatch(resetText('')))}>초기화</RandomButton>
        <RePlay onClick={()=>(setIndex(Math.floor(Math.random()*18)))}><ReplayIcon/></RePlay>
        <K.KeywordBox1 onClick={()=>{dispatch(plusText(Keyword[i].S))}}>{Keyword[i].S}</K.KeywordBox1>
        <K.KeywordBox2 onClick={()=>{dispatch(plusText(Keyword[i+1].S))}}>{Keyword[i+1].S}</K.KeywordBox2>
        <K.KeywordBox3 onClick={()=>{dispatch(plusText(Keyword[i+2].S))}}>{Keyword[i+2].S}</K.KeywordBox3>

        <K.KeywordBox4 onClick={()=>{dispatch(plusText(Keyword[i].V))}}>{Keyword[i].V}</K.KeywordBox4>
        <K.KeywordBox5 onClick={()=>{dispatch(plusText(Keyword[i+1].V))}}>{Keyword[i+1].V}</K.KeywordBox5>
        <K.KeywordBox6 onClick={()=>{dispatch(plusText(Keyword[i+2].V))}}>{Keyword[i+2].V}</K.KeywordBox6>

        <K.KeywordBox7 onClick={()=>{dispatch(plusText(Keyword[i].O))}}>{Keyword[i].O}</K.KeywordBox7>
        <K.KeywordBox8 onClick={()=>{dispatch(plusText(Keyword[i+1].O))}}>{Keyword[i+1].O}</K.KeywordBox8>
        <K.KeywordBox9 onClick={()=>{dispatch(plusText(Keyword[i+2].O))}}>{Keyword[i+2].O}</K.KeywordBox9>

        <K.KeywordBox10 onClick={()=>{dispatch(plusText(Keyword[i].A))}}>{Keyword[i].A}</K.KeywordBox10>
        <K.KeywordBox11 onClick={()=>{dispatch(plusText(Keyword[i+1].A))}}>{Keyword[i+1].A}</K.KeywordBox11>
        <K.KeywordBox12 onClick={()=>{dispatch(plusText(Keyword[i+2].A))}}>{Keyword[i+2].A}</K.KeywordBox12>

        <SelectText>{a.user.text}</SelectText>
        <S.BigButton onClick={() => (dispatch(addText(inputvalue)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/email"/> )}  
        </S.Wrapper>
    )
}

export default Mainpage
