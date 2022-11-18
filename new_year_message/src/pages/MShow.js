import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import * as S from '../styles/Majorcss';

import MessgaeCard_Left from '../components/Message/MessgaeCard_Left';
import MessgaeCard_Right from '../components/Message/MessgaeCard_Right';
import {useSelector, useDispatch} from "react-redux"
import Snowman from '../img/Snowman.png';
//스크롤
//import { useInView } from "react-intersection-observer"

//더미 json데이터
import MessageData from '../api/MessageData.json';
//material UI
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Box = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(185, 173, 255, 0.1);
border-radius: 10px;
width: 251px;
position: absolute;
margin-left: 25px;
display:
`
const Content = styled.h3`
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #8571FF;

text-align: left;
padding-left: 15px;
margin-bottom: 5px;

`

const Writer = styled.h4`

text-align: left;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 13px;
color: #4B4B4B;
margin-top: 10px;
padding-left: 15px;

`
const Img = styled.img`
width: 180px;
position: absolute;
left: 0%;
margin-top: 20px;
`
const Filter = styled.button`
border: none;
position: absolute;
width: 65px;
height: 30px;
left: 300px;
top: 91px;

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
const TitleBox = styled.div`
position: fixed;
height: 40px;
`

const DropDownBox = styled.div`
border: none;
width: 70px;
background-color: #F1F0F6;
border: 2px solid #C8BDFF;
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
color: #C8BDFF;
&: hover{
    color:#8571FF; //글자색
}
`

const Padding = styled.div`
margin-top: 160px;
`
function MCheck() {
    //리덕스에 있는 state 가져오기
    let a = useSelector((state) => { return state.user } )

    //[목표] 오늘이 1.1일 이후면 true보여주기 아니면 안보여주기
    const [isNewYear, setNewYear] = useState(true);
    //오늘 날짜 할당
    const day = new Date();     
    const todate = day.getDate();
    //todate == 1 ? setNewYear(true) : setNewYear(false);
    //console.log(todate);

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
                {MessageData.map((dum, i)=>{
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
            {MessageData.filter(m=>m.category === filter).map((dum, i)=>{
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
            {/* {MessageData.filter(m=>m.category === filter).map((dum, i)=>{
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
            })} */}
            <Img src={Snowman}/>
        </S.Wrapper>
    ):(
        <>
            <S.Text>아직 신년이 아니예요!</S.Text>
        </>
    );
}

export default MCheck
