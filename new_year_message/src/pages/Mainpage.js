
import React from 'react'
import styled from 'styled-components';

const Text = styled.h1`
position: left;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 30px;
letter-spacing: 0.035em;

color: #8571FF;
padding-top: 30px;
padding-left: 26px;

`
const BigButton = styled.button`
background: #FFFFFF;
border: 1px solid #B9ADFF;
box-shadow: 0px 0px 15px rgba(106, 138, 255, 0.1);
border-radius: 18px;

width: 90%;
height: 50px;
position: fixed;
bottom: 0;
margin-bottom: 100px;
margin-left: 18px;
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
        <Text>
            보다 따뜻한 2023년을 위해, 
            <br/>응원의 메시지를 
            <br/>작성해주세요 🍀
        </Text>
        <BigButton onClick={() => (window.location.href = '/nickname')}>작성하러 가기</BigButton>        
        </>
    )
}

export default Mainpage

