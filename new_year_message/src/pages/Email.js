import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addEmail, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";

const Text = styled.div`
display: inline-block;
position: left;
text-align: left;
margin-left: 0px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 30px;
letter-spacing: 0.035em;

color: #8571FF;
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
        {console.log(a.user)}
        <S.Text>이메일 주소를 적어주세요</S.Text>
        <Text>2023.01.01이 되면, 알람을 보내드릴게요.</Text>
        <S.Put value = {inputvalue} type="text" placeholder="이메일 주소" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (dispatch(addEmail(inputvalue)))}>다음</S.BigButton>
            {a.user.is_done && (<Navigate to="/complete"/> )} 
        </S.Wrapper>
    )
}

export default Mainpage