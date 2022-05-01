import React, { useState } from 'react';
import styled from 'styled-components';


const Marketing = (props) => {
    const [open, setOpen] = useState(true);


    return (

        <Box><Icon src={props.img} /><Header>{props.header}</Header><p open={open}>{props.paragraph}</p></Box>

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
@media screen and (max-width:768px){
    max-width:100%;
    height:25%;

    p{
        display:none ;
    }
   
}
`;

const Icon = styled.img`
height:50px;
width:50px;


@media screen and (max-width:768px){
 display:none;   
}
`;

const Header = styled.h3`
font-size:22px ;
font-weight:100;
color:#fff;

@media screen and (max-width:768px){
    padding:0 0 10px;
    border-bottom:1px solid #999;
    width:90vw;
    text-align:left;
    font-size:18px ;
}

`;

