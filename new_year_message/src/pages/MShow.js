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
function MCheck() {
    return (
        <>
        <Text>메시지 보기</Text>

        </>
    )
}

export default MCheck
