import React, {useState} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';


function Mainpage() {
    const [inputvalue, setinputvalue] = useState('')

    return (
        <>
        <S.Text>키워드를 활용하여 메시지를 작성해주세요</S.Text>
        <S.Put value = {inputvalue} type="text" placeholder="닉네임" onChange={(event)=>setinputvalue(event.target.value)}/>
        <S.InputLine/>
        <S.BigButton onClick={() => (window.location.href = '/email')}>다음</S.BigButton>
        </>
    )
}

export default Mainpage
