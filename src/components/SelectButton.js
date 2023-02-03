import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectButton = (props) => {
    const [active, setActive] = useState(false)


    useEffect(() => {
        props.active === props.name ? setActive(true) : setActive(false)
    }, [props.active])
    return (
        <Button onClick={props.buttonHandler} active={active}>{props.name.toUpperCase()}</Button>
    )
}

export default SelectButton;


const Button = styled.div`
color: ${props => (props.active ? 'white' : 'gray')};
margin:2px 5px 20px;
font-size:12px;
cursor:pointer;
`;

