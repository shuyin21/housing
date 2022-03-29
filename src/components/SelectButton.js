import React from 'react';
import styled from 'styled-components';

const SelectButton = (props) => {



    return (
        <Button onClick={props.buttonHandler} active={props.active}>{props.name.toUpperCase()}</Button>
    )
}

export default SelectButton;


const Button = styled.div`
color: ${({ active }) => (active === true ? 'white' : 'gray')};
margin:2px 5px 20px;
font-size:12px;
cursor:pointer;
`;

