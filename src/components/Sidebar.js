import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sidebarDetails } from '../features/sidebarReducer';

const Sidebar = () => {
    const dispatch = useDispatch();

    const sidebarOpen = useSelector((state) => state.sidebar.value);

    console.log(sidebarOpen);
    const sidebarHandler = () => {
        dispatch(sidebarDetails(!sidebarOpen));
    }

    return (
        <SidebarWrapper isOpen={sidebarOpen}>
            <LinkWrapper>
                <MenuLink onClick={sidebarHandler} to='/contact'>CONTACT US</MenuLink>
                <MenuLink onClick={sidebarHandler} to='/services'>SERVICES</MenuLink>
                <MenuLink onClick={sidebarHandler} to='/new-homes'>NEW HOMES</MenuLink>
                <MenuLink onClick={sidebarHandler} to='/lettings'>LETTINGS</MenuLink>
                <MenuLink onClick={sidebarHandler} to='/about'>ABOUT US</MenuLink>
            </LinkWrapper>
        </SidebarWrapper>
    )
}

export default Sidebar;


const SidebarWrapper = styled.div`
width:300px;
height:600px;
background-color:#333 ;
position:absolute;
right:0px;
top: ${({ isOpen }) => (isOpen ? '50px' : '-900px')};
z-index:100 ;
transition: 0.5s ease-in-out;
font-family: 'El Messiri', sans-serif;

@media screen and (max-width:500px){
    width:100%;
    height:95%;
}

`;

const LinkWrapper = styled.div`
display: flex ;
flex-direction: column;
width:100%;
height:100%;
padding:20px 0;


`;
const MenuLink = styled(Link)`
color:#fff;
cursor:pointer;
/* margin:15px 15px; */
padding:10px 15px ;
text-decoration:none;
font-size:18px;

:hover{
    background-color:#B3B3B3 ;
}
`;