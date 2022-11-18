import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

import MessgaeCard_Left from '../components/Message/MessgaeCard_Left';
import MessgaeCard_Right from '../components/Message/MessgaeCard_Right';
import {useSelector, useDispatch} from "react-redux"
import Snowman from '../img/Snowman.png';
import Santa from '../img/Santa.png';
//스크롤
//import { useInView } from "react-intersection-observer"

//더미 json데이터
import MessageData from '../api/MessageData.json';
//material UI
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Filter = styled.button`
border: none;
position: absolute;
width: 65px;
height: 30px;
left: 300px;
top: 91px;
background: transparent;

`
const FilterText = styled.div`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 30px;
color: #8571FF;
padding-top:0px;
`
const DropDownIcon = styled.div`
display: inline-block;
position: absolute;
left: 70.62%;
right: 0%;
top: 10.38%;
bottom: 28.12%;
color: #8571FF;

`

const DropDownBox = styled.div`
border: none;
width: 70px;
background-color: #F1F0F6;
border: 2px solid #8571FF;
position: absolute;
right: -10px;
border-radius: 6px;
opacity:0.6;
`
const DropDownList = styled.li`
list-style: none;
background: transparent;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 30px;
color: #8571FF;
&: hover{
    color:black; //글자색
}
`
const TitleBox = styled.div`
position: fixed;
height: 40px;
`

const Img = styled.img`
width: 180px;
position: absolute;
left: 0%;
margin-top: 20px;
`
const Img2 = styled.img`
width: 180px;
position: absolute;
left: 28%;
margin-top: 100px;
`
const NotNewYear = styled.div`
text-align: center;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #626262;

position: absolute;
left: 35%;
margin-top: 300px;
`

const Padding = styled.div`
margin-top: 160px;
`
function MCheck() {
    //리덕스에 있는 state 가져오기
    let a = useSelector((state) => { return state.MData } )

    //[목표] 오늘이 1.1일 이후면 true보여주기 아니면 안보여주기
    const [isNewYear, setNewYear] = useState(true);
    //오늘 날짜 할당
    const day = new Date();     
    const todate = day.getDate();
    //setNewYear함수 
    useEffect(()=>{
        todate >= 10 ? setNewYear(true) : setNewYear(false);
    })
    console.log(todate,"오늘 날짜");

    //api 가져오기 (드롭바 filter에 맞는.)    
    //messages = JSON.parse(MessageData).filter(m => m.category == "응원" )

    //드롭바 
    const [view, setView] = useState(false);
    const [filter, setFilter] = useState("전체");

    console.log(filter);
    const [cnt, setCnt] = useState(0);
    return isNewYear ? (
        <S.Wrapper>
            <TitleBox>
                <S.Text>메시지 보기</S.Text>
                <Filter onClick = {()=>{setView(!view)}}>
                    <FilterText>필터</FilterText> 
                    {view ? <DropDownIcon> <ExpandLessIcon/></DropDownIcon>: <DropDownIcon> <ExpandMoreIcon/></DropDownIcon>}
                    {view && 
                    <DropDownBox>
                        <DropDownList onClick = {()=>{setFilter("전체")}}>전체</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("응원")}}>응원</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("좋은 글귀")}}>좋은 글귀</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("명언")}}>명언</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("반성")}}>반성</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("교훈")}}>교훈</DropDownList>
                        <DropDownList onClick = {()=>{setFilter("기타")}}>기타</DropDownList>
                    </DropDownBox>}
                    
                </Filter>
            </TitleBox>
            
            <Padding />

            {/* 연동하지 않고 필터 구현하려면 어떻게 해야하노...
            연동한다면 그냥 위에서 api가져올때 filter를 조건으로 달아서 가져오면 된다. */}
            {/* map함수 갯수를 세서 좌, 우 하나씩 카드보여주기 */}
            {console.log("시작")}
            {console.log(MessageData.filter( m => m.category===filter), "필터확인")}
            {/* {temp = MessageData.filter( m => m.category===filter)} */}
            {/* 전체를 보여주려면 filter가 전체일때  */}
            {filter ==="전체" ? 
            <>
            {/* JSON데이터 일때는 a 말고 MessageData */}
            {a.map((dum, i)=>{
                if(i%2 == 0 ){
                    return(
                        <>
                        <MessgaeCard_Left
                        title={dum.title}
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                        </>
                    );
                }else {
                    return(
                        <MessgaeCard_Right
                        title={dum.title}
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                    );                
                }
            })}
            </> : <>    
            {a.filter(m=>m.category === filter).map((dum, i)=>{
                if(i%2 == 0 ){
                    return(
                        <>
                        <MessgaeCard_Left
                        title={dum.title}
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                        </>
                    );
                }else {
                    return(
                        <MessgaeCard_Right
                        title={dum.title}
                        text={dum.text}
                        nickname={dum.nickname}
                        />
                    );                
                }
            })}
            
            </> }
            <Img src={Snowman}/>
        </S.Wrapper>
    ):(
        <>  
            <S.Wrapper>
            <S.Text>메시지 보기</S.Text>
            <Img2 src={Santa}/>
            <NotNewYear>아직 신년이 아니예요!</NotNewYear>
            </S.Wrapper>
        </>
    );
}

export default MCheck
