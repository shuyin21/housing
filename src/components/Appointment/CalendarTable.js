
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CalendarTable = (props) => {
    const [day, setDay] = useState('');
    const dayFunc = (event) => {
        console.log(event.target.parentNode);

        setDay(event.target.value);
        // console.log(props.time, day)
    }

    return (
        <CRow>
            <th onClick={dayFunc} value='Monday' ><span>{props.time}</span></th>
            <th onClick={dayFunc} value='Tuesday' ><span>{props.time}</span></th>
            <th day={'Wednesday'}><span>{props.time}</span></th>
            <th day={'Thursday'}><span>{props.time}</span></th>
            <th day={'Friday'}><span>{props.time}</span></th>
            <th day={'Saturday'}><span>{props.time}</span></th>



        </CRow>
    )
}

export default CalendarTable



const CRow = styled.tr`
display:table-row ;
vertical-align:inherit;
border-color:inherit;


th{
    display: table-cell;
    vertical-align: inherit;
    letter-spacing: 0.05em;
    font-size: 11px;
    font-weight: 100;
    line-height: 1em;
    text-align: -internal-center;
    color: #a0a1a6;
    background-color: #E1E2E6;
cursor:pointer ;
    :hover{
        background-color:#3498db ;
    }
}

`;