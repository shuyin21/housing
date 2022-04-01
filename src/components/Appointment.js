import React from 'react';
import styled from 'styled-components';
import { FcOvertime } from 'react-icons/fc';

const Appointment = () => {
    return (
        <AppointmentWrapper id='appointment'>
            <Container>
                <Header>


                    <AppointmentIcon />
                    <h2>Book Appointment</h2>
                </Header>
            </Container>
        </AppointmentWrapper>
    )
}

export default Appointment;


const AppointmentWrapper = styled.div`
width:100%;
height:600px;
display:flex;
flex-direction: column ;
align-items:center;
justify-content:center;
`;


const Container = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;

`;
const Header = styled.div`
width:100%;
height:150px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


h2{
    font-weight:100 ;
}

`;

const AppointmentIcon = styled(FcOvertime)`
width:40px;
height:40px;

`;