import React, { useState } from 'react';
import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import SelectButton from './SelectButton';
import Button from '../components/Button';
import Marketing from './Marketing';
import { MData1 } from './Data';

const Info = () => {

    const [sellers, setSellers] = useState(true);
    const [buyers, setBuyers] = useState(false);
    const [landlords, setLandlords] = useState(false);
    const [tenants, setTenants] = useState(false);
    const [data, setData] = useState(MData1);

    console.log(data);

    const sellerHandler = () => {
        clearStates();
        setSellers(true);
    }
    const buyerHandler = () => {
        clearStates();
        setBuyers(true);
    }
    const landlordHandler = () => {
        clearStates();
        setLandlords(true);
    }
    const tenantsHandler = () => {
        clearStates();
        setTenants(true);
    }
    const clearStates = () => {
        setSellers(false);
        setBuyers(false);
        setLandlords(false);
        setTenants(false);

    }



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
            <DataWrapper>
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

display:flex;
`;