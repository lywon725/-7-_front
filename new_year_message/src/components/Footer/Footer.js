import React from 'react'
import styled from 'styled-components';

const FooterBox = styled.div`
margin-top: 100px;
bottom: 0;
`
function Footer() {
    return (
        <>
        <FooterBox>
        <hr/>
        기획/디자인
        백엔드
        프론트
        </FooterBox>
        
        </>
    )
}

export default Footer
