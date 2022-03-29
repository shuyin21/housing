import React from 'react';
import styled from 'styled-components';


const Marketing = (props) => {
    return (

        <Box><Icon src={props.img} /><Header>{props.header}</Header><p>{props.paragraph}</p></Box>




    )
}

export default Marketing

const Wrapper = styled.div`
width:100%;
height:300px;
padding:20px 5%;
display:flex;
margin-bottom:50px;
color:#fff;

`;

// const Holder = styled.div`
// width:100%;
// height:100%;

// align-items:center;
// justify-content:center;
// display:flex;
// /* grid-template-columns: 20% 20% 20% 20%; */

// `;

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

p{
    color:#A0A1A6;
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