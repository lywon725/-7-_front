import styled from 'styled-components';

export const Text = styled.h1`
position: left;
font-family: 'Pretendard';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 30px;
letter-spacing: 0.035em;

color: #8571FF;
padding-top: 30px;
padding-left: 26px;

`
export const BigButton = styled.button`
background: #FFFFFF;
border: 1px solid #B9ADFF;
box-shadow: 0px 0px 15px rgba(106, 138, 255, 0.1);
border-radius: 18px;

width: 90%;
height: 50px;
position: fixed;
bottom: 0;
margin-bottom: 100px;
margin-left: 18px;

//텍스트
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 12px;
color: #8571FF;

`
export const Put = styled.input`
    width: 30%;
    height: 5%;
    position: absolute;
    margin-left: 24px;
    left: 13px;
    top: 180px;
    border: none;
    background: transparent;
    font-size: 17px;
`
export const InputLine = styled.hr`
height: 0.2%;
border: 0;
background-color: #B9ADFF;
width: 87%;
display: center;
position: absolute;
margin-left: 27px;
margin-top: 140px;
`