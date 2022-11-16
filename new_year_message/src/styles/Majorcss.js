import styled from 'styled-components';

export const Text = styled.h1`
position: left;
text-align: left;
margin-left: 6px;
margin-top: 120px;
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

width: 350px;
height: 50px;
margin-top: 450px;
position: flex;
bottom: 0;
margin-bottom: 10px;
display: inline-block;

//텍스트
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 12px;
color: #8571FF;

`
export const Put = styled.input`
    width: 80%;
    height: 5%;
    position: absolute;
    margin-left: 24px;
    left: 13px;
    top: 270px;
    border: none;
    background: transparent;
    font-size: 17px;
    font-color: #BFC2CA;
`
export const InputLine = styled.hr`
height: 0.2%;
border: 0;
background-color: #B9ADFF;
width: 87%;
display: center;
position: absolute;
margin-left: 27px;
margin-top: 100px;
`

export const Wrapper = styled.div`
width: 400px;
height: 1200px;
overflow: hidden;
text-align: center;
position: absolute;
left: 50%;
transform: translate(-50%);
`