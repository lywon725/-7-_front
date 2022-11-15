
import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')

    return (
        <>
        <S.Text>닉네임을 입력해주세요</S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="닉네임" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (window.location.href = '/title')}>다음</S.BigButton>
        </>
    )
}

export default Mainpage

