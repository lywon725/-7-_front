
import React from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import "../styles/main.css"
import tree from '../img/tree.png';

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
    return (
        <>
            <S.Wrapper>
                <S.Text>
                    보다 따뜻한 2023년을 위해, 
                    <br/>응원의 메시지를 
                    <br/>작성해주세요 🍀
                </S.Text>
                <div class="progress">
                    <div class="progress-level" ></div>
                </div>
                <S.textP>
                    현재 작성된 메시지 총&nbsp;
                    <p class="countP">100</p>
                    개
                </S.textP>
                <div>
                    <img class="tree" src={tree} ></img>
                </div>

                <MainButton onClick={() => (window.location.href = '/nickname')}>작성하러 가기</MainButton>        
            </S.Wrapper>
        </>
    )
}

export default Mainpage

