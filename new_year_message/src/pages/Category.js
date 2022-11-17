import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addCategory, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";
//모달창
import Modal from 'react-modal';
import "../styles/main.css"
import { width } from '@mui/system';


function Mainpage() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    
     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <S.Wrapper>
        <S.Text>작성하실 글의<br/>카테고리를 선택해주세요</S.Text>
        <input type="text" class ="category" placeholder='카테고리'onClick={() => setModalIsOpen(true)}/>
        <S.InputLine/>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
         style={{
            overlay: {
            position: "fixed",
            backgroundColor: "rgba(15, 15, 15, 0.79)",
        },
            content: {
                position: "relative",
                
                top: "400px",
                left: "50%",
                transform: "translate(-52%)",
                width: "335px",
                height: "200px",

        },
        }}>
            This is Modal content
        </Modal>
        <S.BigButton onClick={() => (dispatch(addCategory("아무거나")))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/keyword"/> )}  
        
        </S.Wrapper>

    );

}

export default Mainpage
