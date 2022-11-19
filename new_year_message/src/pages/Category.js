import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';
//리덕스
import {useSelector, useDispatch} from "react-redux"
import {addCategory, ChangeState} from '../redux/store'
import { Navigate } from "react-router-dom";
//모달창
import Modal from 'react-modal';
import "../styles/main.css"




function Mainpage() {
    //리덕스
    let a = useSelector((state) => { return state } )
    let dispatch = useDispatch()
    console.log(a,"확인")
     //렌더링이 완료될때마다 is_done false로 만들어주기
    useEffect(() => {
        dispatch(ChangeState())
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        document.body.style.overflow = "unset";
        
    };
    let id
    const [i, setCate] = useState(1);
    const select = () => {
        const selectList = document.querySelectorAll(".listcnt > div");     //선택한 카테고리 번호 구하기
        selectList.forEach((el, index) => {             
        el.onclick = () => {
            const title = CATEGORIES[index].title;
            id = CATEGORIES[index].id;
            document.querySelector(".category").placeholder =  title;
            setModalIsOpen(false);
            closeModal();
            //setCate(id);
            console.log(id, "확인아요");
        };
        });
    };
    Modal.setAppElement('#root')

    const CATEGORIES = [
        { id: '01', title: '응원'},
        { id: '02', title: '좋은 글귀'},
        { id: '03', title: '명언'},
        { id: '04', title: '반성'},
        { id: '05', title: '교훈'},
        { id: '06', title: "기타"},
    ];



    return (
        <S.Wrapper>
        <S.Text>작성하실 글의<br/>카테고리를 선택해주세요</S.Text>
        <input type="text" class ="category" placeholder='카테고리'onClick={() => {setModalIsOpen(true); openModal()}} />   
        <S.InputLine/>


        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
        style={{
            overlay: {
            position: "fixed",
            top: "0",
            overflowY: "hidden",
            backgroundColor: "rgba(15, 15, 15, 0.79)",
        },
            content: {
                position: "relative",  
                top: "360px",
                left: "50%",
                transform: "translate(-51.8%)",
                width: "335px",
                height: "270px",
                borderRadius: "25px 25px 0 0",

        },
        }}>
            <div class="listTitle">카테고리</div>
                <div class="listcnt"  >
                    <div class="li" onClickCapture={() => {select(); setCate(1)}}>{CATEGORIES[0].title}</div>
                    <div class="li" onClickCapture={() => {select(); setCate(2)}}>{CATEGORIES[1].title}</div>
                    <div class="li" onClickCapture={() => {select(); setCate(3)}}>{CATEGORIES[2].title}</div>
                    <div class="li" onClickCapture={() => {select(); setCate(4)}}>{CATEGORIES[3].title}</div>
                    <div class="li" onClickCapture={() => {select(); setCate(5)}}>{CATEGORIES[4].title}</div>
                    <div class="li" onClickCapture={() => {select(); setCate(6)}}>{CATEGORIES[5].title}</div>  
                </div>
        </Modal>
        <S.BigButton onClick={() => (dispatch(addCategory(i)))}>다음</S.BigButton>
        {a.user.is_done && (<Navigate to="/keyword"/> )}  
        {console.log(id,"황인")}
        </S.Wrapper>

    );

}

export default Mainpage
