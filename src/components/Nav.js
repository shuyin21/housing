import React from 'react';
import styled from 'styled-components';

import { FaSearch as SearchIcon, FaPhone as PhoneIcon } from 'react-icons/fa';
import { GiHamburgerMenu as BurgerMenu } from 'react-icons/gi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { sidebarDetails } from '../features/sidebarReducer';
import { useSelector, useDispatch } from 'react-redux';
import { MdHomeWork } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Nav = () => {

    const sidebarOpen = useSelector((state) => state.sidebar.value);
    const dispatch = useDispatch();

    const sidebarHandler = () => {
        dispatch(sidebarDetails(!sidebarOpen));
    }


    return (
        <NavMain>
            <NavWrapper>
                <Logo onClick={() => { dispatch(sidebarDetails(false)) }} to='/'><HomeIcon /><h4>S</h4><h3>H</h3><h4>U</h4></Logo>
                <Menu>

                    <MenuItem ><h4>Property Search</h4><SearchIcon /></MenuItem>
                    <MenuItem><h4> Contact</h4><PhoneIcon /></MenuItem>
                    <MenuItem onClick={sidebarHandler}><h4>Menu</h4>{sidebarOpen ? <CloseIcon /> : <BurgerMenu />}</MenuItem>

                </Menu>
            </NavWrapper>

        </NavMain>
    )
}

export default Nav


const NavMain = styled.nav`
height:60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top:0;
background-color:#333 ;
z-index: 200;
overflow: hidden;
font-family: 'El Messiri', sans-serif;

`;
const NavWrapper = styled.div`
width:100% ;
height:100%;
padding:5px 20px;
display:flex;
align-items:center;
justify-content:space-between;
text-align:center;



`;
const Logo = styled(Link)`
width:100px;
height:80%;
background-color: #fff ;
display:flex;
/* flex-direction:column ; */
align-items:center;
justify-content:center;
text-decoration:none;
h3{
        
        color:red;
    }
h4{
   
    font-size:15px ;
    margin:0;
    padding:0;
    color:#333;
    
}

`;
const Menu = styled.div`
width:350px;
height:100%;
display:flex;
align-items:center;
justify-content:space-between;

@media screen and (max-width:768px){
    width:30%;
}

`;
const MenuItem = styled.div`
display:flex;
height:100%;
align-items:center;
justify-content:center;
color:#858E94;
cursor:pointer;
h4{
    margin-right:5px ;
@media screen and (max-width:768px){
    display: none ;
}
}


:hover{
    color:#E0E0E0;
}
`;

const CloseIcon = styled(RiCloseCircleFill)`
width:20px;
height:20px;
`;

const HomeIcon = styled(MdHomeWork)`
height:40px;
width:30px;
margin:0;
padding:0; ;

`;