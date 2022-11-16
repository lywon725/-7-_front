
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addTitle, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";



function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')

    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    //a.user.is_done = false

     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });

    return (
        <S.Wrapper>
        {console.log(a.user)}
        <S.Text>작성하실 글의 <br/>제목을 입력해주세요</S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="제목" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (dispatch(addTitle(inputvalue)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/category"/> )}   
        </S.Wrapper>
    )
}

export default Mainpage
