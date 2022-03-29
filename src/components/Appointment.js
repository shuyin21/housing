import React from 'react';
import styled from 'styled-components';

const Appointment = () => {
    return (
        <AppointmentWrapper id='appointment'>
            <h2>Appointment Component</h2>
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