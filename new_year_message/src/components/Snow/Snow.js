import React from 'react'
import "../../styles/snow_effect.css"
import styled from 'styled-components';

const Box = styled.div`
position: fixed;
`

function Snow() {
    return (
        <Box>
        <div class="snow1"></div>
        <div class="snow2"></div>
        <div class="snow3"></div>
        </Box>
    )
}

export default Snow
