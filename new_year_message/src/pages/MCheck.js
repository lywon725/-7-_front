import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import "../styles/main.css"

//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addNULL, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";
import ginger1 from '../img/Gingerbread.png';
import ginger2 from '../img/Gingerbread2.png';

import axios from 'axios';

const MainButton = styled.button`
background: #FFFFFF;
border: 1px solid #B9ADFF;
box-shadow: 0px 0px 15px rgba(106, 138, 255, 0.1);
border-radius: 18px;

width: 300px;
height: 50px;
position: flex;
bottom: 0;
margin-bottom: 10px;
margin-top: 40px;
display: inline-block;

//텍스트
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 12px;
color: #8571FF;

`

function MCheck() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    {console.log(a.MData, "MData확인")}

     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });

    const [DB, setDB]= useState([]);
    const getDate = async()=>{
        try{
            const res = await axios.get(
                'http://127.0.0.1:8000/',
            );
            setDB(res.data);
            //console.log(res.data);
        }catch(e){
            console.log(e)
        }
        
        
    const cnt = DB.length;
    const per = cnt * 10;
    console.log(cnt);
    document.querySelector(".countP").innerHTML = cnt;
    document.querySelector(".progress-level").style.width = per + "%";
    }

    return (
        <S.Wrapper>
        <S.Text>메시지 확인까지 <br/>13시간 12분 15초 남았어요!</S.Text>
        <div class="margin">
        <div class="progress" onWaiting={getDate()}>
            <div class="progress-level" ></div>
        </div>
        </div>
        <S.textP>
            현재 작성된 메시지 총&nbsp;
            <p class="countP">100</p>
            개
        </S.textP>
        <div>
            <img class="ginger" src={ginger1} ></img>
            <img class="ginger" src={ginger2} ></img>
        </div>
        <MainButton onClick={() => (dispatch(addNULL("웅")))}>확인하러 가기</MainButton>
            {a.user.is_done && (<Navigate to="/MShow"/> )} 
        </S.Wrapper>
    )
}

export default MCheck
