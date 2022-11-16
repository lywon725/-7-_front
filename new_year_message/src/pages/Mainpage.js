
import React from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
import "../styles/main.css"

function Mainpage() {
    return (
        <>
            <div class="wrapper">
                <S.Text>
                    보다 따뜻한 2023년을 위해, 
                    <br/>응원의 메시지를 
                    <br/>작성해주세요 🍀
                </S.Text>
                <div class="progress">
                    <div class="progress-level" ></div>
                </div>
                <div>
                    <p>현재 작성된 메시지 총</p>
                    <p>100(개수 받아오기)</p>
                    <p>개</p>
                </div>
                <S.BigButton onClick={() => (window.location.href = '/nickname')}>작성하러 가기</S.BigButton>        
            </div>
        </>
    )
}

export default Mainpage

