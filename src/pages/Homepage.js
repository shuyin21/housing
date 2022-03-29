import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { sidebarDetails } from '../features/sidebarReducer';

import Info from '../components/Info';
import Appointment from '../components/Appointment';
import Banner from '../components/Banner';

const Homepage = () => {

    const dispatch = useDispatch();


    return (
        <HomeWrapper onClick={() => { dispatch(sidebarDetails(false)) }}>
            <Banner />
            <Info />
            <Appointment />
        </HomeWrapper>
    )
}

export default Homepage;


const HomeWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
z-index:1 ;


`;

