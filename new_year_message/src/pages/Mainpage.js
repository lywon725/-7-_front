
import React from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import "../styles/main.css"

const MainButton = styled.button`
background: #FFFFFF;
border: 1px solid #B9ADFF;
box-shadow: 0px 0px 15px rgba(106, 138, 255, 0.1);
border-radius: 18px;

width: 350px;
height: 50px;
margin-top: 150px;
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
                <div>
                    <p>현재 작성된 메시지 총</p>
                    <p>100(개수 받아오기)</p>
                    <p>개</p>
                </div>
                <MainButton onClick={() => (window.location.href = '/nickname')}>작성하러 가기</MainButton>        
            </S.Wrapper>
        </>
    )
}

export default Mainpage

