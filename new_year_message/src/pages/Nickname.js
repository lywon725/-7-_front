
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import * as S from '../styles/Majorcss'

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addNickname, ChangeState} from '../redux/store'
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
            <S.Text>닉네임을 입력해주세요</S.Text>
            <div class="margin">
            <S.Put value = {inputvalue} type="text" placeholder="닉네임" onChange={(event)=>setinputvalue(event.target.value)}/>
            <S.InputLine/>
            </div>
            <S.BigButton onClick={() => (dispatch(addNickname(inputvalue)))}>다음</S.BigButton>
            {a.user.is_done && (<Navigate to="/title"/> )}  
        </S.Wrapper>
    )
}

export default Mainpage

