
import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';


function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')

    return (
        <S.Wrapper>
        <S.Text>작성하실 글의 <br/>제목을 입력해주세요</S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="제목" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (window.location.href = '/category')}>다음</S.BigButton>
        </S.Wrapper>
    )
}

export default Mainpage
