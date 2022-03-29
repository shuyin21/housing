import React from 'react';
import styled from 'styled-components';
import BannerImage from '../images/bannerV2.jpg';
import Button from '../components/Button';

const Banner = () => {
    return (
        <BannerWrapper>

            <Img src={BannerImage} />
            <BannerIntro>
                <h1>Ready to move? So are we.</h1>
                <p>When you move with SHU we’re behind you every step of the
                    way, to make your moving journey easier. It’s why we’ve been given a
                    5* rating in more than a thousand Google reviews!</p>
                <Button value={'arrange valuation'} whereTo={'appointment'} />
            </BannerIntro>




        </BannerWrapper>
    )
}

export default Banner;



const BannerWrapper = styled.div`
width:100%;
height:800px;

    position: relative;
    
   
    :before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
    z-index: 2;
}

`;

const Img = styled.img`
        width: 100%;
        height:100%;
        object-fit: cover;
        z-index:-99 ;


`;


const BannerIntro = styled.div`
max-width:700px;
height:500px;
position:absolute;
color:#fff;
display:flex ;
flex-direction:column;
align-items: flex-start;
justify-content: center;
left:10%;
bottom:20%;

z-index:10 ;
text-align: left;
font-family:'Nanum Myeongjo', serif; 

@media screen and (max-width:768px){

    left:10px;
    align-items: center;
    text-align: center;
}

h1{
    font-size:52px ;
    max-width:700px;
    
}

p{
    max-width:600px ;
    font-size:24px ;
   
   
}
`;

