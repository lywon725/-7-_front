import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';



function Mainpage() {
    return (
        <S.Wrapper>
        <S.Text>메시지 작성이 완료되었어요!</S.Text>
        <S.BigButton onClick={() => (window.location.href = '/MCheck')}>확인</S.BigButton>
        </S.Wrapper>
    )
}

export default Mainpage
