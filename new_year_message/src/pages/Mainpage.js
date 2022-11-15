
import React from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

function Mainpage() {
    return (
        <>
        <S.Text>
            보다 따뜻한 2023년을 위해, 
            <br/>응원의 메시지를 
            <br/>작성해주세요 🍀
        </S.Text>
        <S.BigButton onClick={() => (window.location.href = '/nickname')}>작성하러 가기</S.BigButton>        
        </>
    )
}

export default Mainpage

