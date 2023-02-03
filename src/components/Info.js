import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import SelectButton from './SelectButton';
import Button from '../components/Button';
import Marketing from './Marketing';
import { sellers, buyers, landlords, tenants } from './data';

const Info = () => {


    const [data, setData] = useState(sellers[0].data)
    const dataSet = [sellers, buyers, landlords, tenants];
    const [selection, setSelection] = useState('sellers');
    const buttons = ['sellers', 'buyers', 'landlords', 'tenants'];
    const [MStyle, setMStyle] = useState(
        {
            opacity: 1,
            transition: '.5s ease-in',
        }
    )
    const OpacityClear = {
        opacity: 0,
        transition: '0.2s ease-out'
    }

    const BasicStyle = {
        opacity: 1,
        transition: '0.2s ease-in',
    };
    const stateHandler = (value) => {
        setSelection(value)
        dataSet.map(data => {
            if (data[0].type === value) {
                styleHandler();
                setTimeout(() => {
                    setData(data[0].data)
                }, 200);
            }
        })
    }
    const styleHandler = () => {
        setMStyle(OpacityClear);
        setTimeout(() => {
            setMStyle(BasicStyle);
        }, 500);
    }

    return (
        <InfoWrapper>
            <InfoLogo />
            <h2>WHAT SHU CAN DO FOR YOU</h2>
            <ButtonsWrapper >
                {
                    buttons.map((btn, idx) => (
                        <SelectButton key={idx} buttonHandler={() => { stateHandler(btn) }} name={btn} active={selection} />
                    ))
                }
            </ButtonsWrapper>
            <DataWrapper style={MStyle}>
                {data.map((data, idx) => (
                    <Marketing key={idx} img={data.img} header={data.header} paragraph={data.paragraph} />
                ))}
            </DataWrapper>
            <Button value={'Book appointment'} whereTo={'appointment'} />

        </InfoWrapper>
    )
}

export default Info


const InfoWrapper = styled.div`
width:100%;
height:700px;
background-color:#333 ;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


h2{
    color:white;
}
`;

const InfoLogo = styled(BsInfoCircle)`
color:white;
width:30px;
height:30px;
`;

const ButtonsWrapper = styled.div`
display:flex;

`;

const DataWrapper = styled.div`
width:100%;
min-height:200px;
margin:50px 5%;
transition:3s ease-in;
display:flex;

@media screen and (max-width: 768px){
    flex-direction:column ;
    
    margin:0 ;
    width:100vw;
}
`;