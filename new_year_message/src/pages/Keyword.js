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
`
const Message = styled.input`
border: 0px;
background: transparent;
width: 80%;
height: 20%;
margin-left: 2px;
margin-top: 24px;
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
    
    return (
        <S.Wrapper>
        <S.Text>키워드를 활용하여 <br/>메시지를 작성해주세요</S.Text>
        <TextBox>
            <Message value = {inputvalue} type="text" placeholder="메시지" onChange={(event)=>setinputvalue(event.target.value)}/>
        </TextBox>
        <RandomButton>랜덤</RandomButton>
        <RePlay onClick={()=>(setIndex(Math.floor(Math.random()*18)))}><ReplayIcon/></RePlay>
        {console.log(i)}
        <K.KeywordBox1>{Keyword[i].S}</K.KeywordBox1>
        <K.KeywordBox2>{Keyword[i+1].S}</K.KeywordBox2>
        <K.KeywordBox3>{Keyword[i+2].S}</K.KeywordBox3>

        <K.KeywordBox4>{Keyword[i].V}</K.KeywordBox4>
        <K.KeywordBox5>{Keyword[i+1].V}</K.KeywordBox5>
        <K.KeywordBox6>{Keyword[i+2].V}</K.KeywordBox6>

        <K.KeywordBox7>{Keyword[i].O}</K.KeywordBox7>
        <K.KeywordBox8>{Keyword[i+1].O}</K.KeywordBox8>
        <K.KeywordBox9>{Keyword[i+2].O}</K.KeywordBox9>

        <K.KeywordBox10>{Keyword[i].A}</K.KeywordBox10>
        <K.KeywordBox11>{Keyword[i+1].A}</K.KeywordBox11>
        <K.KeywordBox12>{Keyword[i+2].A}</K.KeywordBox12>

        <S.BigButton onClick={() => (dispatch(addText(inputvalue)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/email"/> )}  
        </S.Wrapper>
    )
}

export default Mainpage
