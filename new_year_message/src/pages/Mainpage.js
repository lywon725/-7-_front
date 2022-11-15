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

function Mainpage() {
    return (
        <>
        <Text>보다 따뜻한 2023년을 위해, <br/>응원의 메시지를 <br/>작성해주세요 🍀</Text>
        </>
    )
}

export default Mainpage
