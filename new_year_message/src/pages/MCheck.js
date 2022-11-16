import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addNULL, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";


function MCheck() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });
    return (
        <S.Wrapper>
        <S.Text>메시지 확인까지 <br/>13시간 12분 15초 남았어요!</S.Text>
        <S.BigButton onClick={() => (dispatch(addNULL("웅")))}>확인하러 가기</S.BigButton>
            {a.user.is_done && (<Navigate to="/MShow"/> )} 
        </S.Wrapper>
    )
}

export default MCheck
