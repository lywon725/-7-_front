import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

function Mainpage() {

    return (
        <S.Wrapper>
        <S.Text>작성하실 글의<br/>카테고리를 선택해주세요</S.Text>
        <S.BigButton onClick={() => (window.location.href = '/keyword')}>다음</S.BigButton>

        </S.Wrapper>
    )
}

export default Mainpage
