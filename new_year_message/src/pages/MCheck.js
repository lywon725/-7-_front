import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';


function MCheck() {
    return (
        <S.Wrapper>
        <S.Text>메시지 확인까지 <br/>13시간 12분 15초 남았어요!</S.Text>
        <S.BigButton onClick={() => (window.location.href = '/MShow')}>확인하러 가기</S.BigButton>

        </S.Wrapper>
    )
}

export default MCheck
