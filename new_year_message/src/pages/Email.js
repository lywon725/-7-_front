import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')

    return (
        <S.Wrapper>
        <S.Text>이메일 주소를 적어주세요 <br/> . </S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="이메일 주소" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (window.location.href = '/complete')}>다음</S.BigButton>
        </S.Wrapper>
    )
}

export default Mainpage