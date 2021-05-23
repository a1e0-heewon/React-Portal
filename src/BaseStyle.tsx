import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
    background: snow;
    border: 1px solid black;
    position: fixed;
    left: 40%;
    top: 40%;
    width: 30%;
    height: 30%;
    text-align: center;
`

const BaseStyle = ({ onClose }: any) => {
    return (
        <Base>
            <p>모달입니다</p>
            <p>a1e0-heewon</p>
            <button onClick={onClose} >닫기</button>
        </Base>
    )
}

export default BaseStyle;