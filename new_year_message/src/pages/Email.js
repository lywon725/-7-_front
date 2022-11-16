import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addEmail, ChangeState} from '../redux/store'
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
        {console.log(a.user)}
        <S.Text>이메일 주소를 적어주세요 <br/> . </S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="이메일 주소" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (dispatch(addEmail(inputvalue)))}>다음</S.BigButton>
            {a.user.is_done && (<Navigate to="/complete"/> )} 
        </S.Wrapper>
    )
}

export default Mainpage