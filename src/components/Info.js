import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import SelectButton from './SelectButton';
import Button from '../components/Button';
import Marketing from './Marketing';
import { MData1, MData2, MData3, MData4 } from './Data.js';

const Info = () => {

    const [sellers, setSellers] = useState(true);
    const [buyers, setBuyers] = useState(false);
    const [landlords, setLandlords] = useState(false);
    const [tenants, setTenants] = useState(false);
    const [data, setData] = useState(MData1);
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

    const sellerHandler = () => {
        styleHandler();
        clearStates();
        setSellers(true);
        setTimeout(() => {
            setData(MData1);
        }, 200);




    }
    const buyerHandler = () => {
        styleHandler();
        clearStates();
        setBuyers(true);
        setTimeout(() => {
            setData(MData2);
        }, 200);


    }
    const landlordHandler = () => {
        styleHandler();
        clearStates();
        setLandlords(true);
        setTimeout(() => {
            setData(MData3);
        }, 200);

    }
    const tenantsHandler = () => {
        styleHandler();
        clearStates();
        setTenants(true);
        setTimeout(() => {
            setData(MData4);
        }, 200);

    }
    const clearStates = () => {
        setSellers(false);
        setBuyers(false);
        setLandlords(false);
        setTenants(false);

    }
    const styleHandler = () => {
        setMStyle(OpacityClear);
        setTimeout(() => {
            setMStyle(BasicStyle);
        }, 500);
    }
    useEffect(() => {
        console.log(data);
    }, [MStyle]);


    return (
        <InfoWrapper>

            <InfoLogo />
            <h2>WHAT SHU CAN DO FOR YOU</h2>
            <ButtonsWrapper >
                <SelectButton buttonHandler={sellerHandler} name='Sellers' active={sellers} />
                <SelectButton buttonHandler={buyerHandler} name='buyers' active={buyers} />
                <SelectButton buttonHandler={landlordHandler} name='landlords' active={landlords} />
                <SelectButton buttonHandler={tenantsHandler} name='tenants' active={tenants} />
            </ButtonsWrapper>
            <DataWrapper style={MStyle}>
                {data.map((data) => (
                    <Marketing key={data.key} img={data.img} header={data.header} paragraph={data.paragraph} />
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
`;