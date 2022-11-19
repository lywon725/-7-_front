import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {ChangeState, addData, addNULL} from '../redux/store'
import { Navigate } from "react-router-dom";
import letter from '../img/Letter.png';

const Letter = styled.img`
    width: 218px;
    height: 218px;
    margin-top: 70px;
`
const Text = styled.div`
display: inline-block;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.035em;

color: #8571FF;
`
const BigButton = styled.button`
background: #FFFFFF;
border: 1px solid #B9ADFF;
box-shadow: 0px 0px 15px rgba(106, 138, 255, 0.1);
border-radius: 18px;

width: 300px;
height: 50px;
margin-top: 100px;
position: flex;
bottom: 0;
margin-bottom: 10px;
display: inline-block;

//텍스트
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 12px;
color: #8571FF;
`


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
        <Letter src={letter}></Letter>
        <Text>작성해주신 메시지는 
        <br/> 2023..01.01이 되어야 확인 가능합니다.
        <br/>잊지 말고 메시지를 확인하러 와주세요:)</Text>
        
        <BigButton onClick={() => {(dispatch(addData(
            {
            nickname: a.user.nickname,
            title: a.user.title,
            category:a.user.category,
            text: a.user.text,
            email: a.user.email
            }
        )));dispatch(addNULL("웅"));}}>다음</BigButton>
        {/* 다음버튼 누르고 추가가 되면 네이게이트 실행 */}
        {a.user.is_done && (<Navigate to="/MCheck"/> )} 
        {console.log(a.MData, "MData")}
        </S.Wrapper>
    )
}

export default Mainpage
