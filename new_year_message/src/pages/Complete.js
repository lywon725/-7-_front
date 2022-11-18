import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {ChangeState, addData, addNULL} from '../redux/store'
import { Navigate } from "react-router-dom";



function Mainpage() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()

    let Data

     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });

    return (
        <S.Wrapper>
        <S.Text>메시지 작성이 완료되었어요!</S.Text>
        {/* 저장된 state store.js 추가하기 */}
        {/* {Data.push(a.user.nickname)} */}
        
        <S.BigButton onClick={() => {(dispatch(addData(
            {
            nickname: a.user.nickname,
            title: a.user.title,
            category:a.user.category,
            text: a.user.text,
            email: a.user.email
            }
        )));dispatch(addNULL("웅"));}}>다음</S.BigButton>
        {/* 다음버튼 누르고 추가가 되면 네이게이트 실행 */}
        {a.user.is_done && (<Navigate to="/MCheck"/> )} 
        {console.log(a.MData, "MData")}
        </S.Wrapper>
    )
}

export default Mainpage
