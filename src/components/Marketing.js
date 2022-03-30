import React from 'react';
import styled from 'styled-components';


const Marketing = (props) => {
    return (

        <Box><Icon src={props.img} /><Header>{props.header}</Header><p>{props.paragraph}</p></Box>




    )
}

export default Marketing

const Box = styled.div`
border-right:1px solid #A0A1A6;
height:100%;
max-width:25%;
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
align-items:center;
padding:0 10px ;
transition:1.2s ease-in-out  ;

p{
    color:#A0A1A6;
    transition:2s ease-in-out
}
`;

const Icon = styled.img`
height:50px;
width:50px;

`;

const Header = styled.h3`
font-size:22px ;
font-weight:100;
color:#fff;
`;