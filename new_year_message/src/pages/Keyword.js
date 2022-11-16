import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addText, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";


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
        <S.Put value = {inputvalue} type="text" placeholder="메시지" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (dispatch(addText(inputvalue)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/email"/> )}  
        </S.Wrapper>
    )
}

export default Mainpage
