import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import CalendarTable from './CalendarTable';

const Calendar = () => {
    const [nWeek, setNWeek] = useState();
    const [sevenDays, setSevenDays] = useState(0);
    const [enabled, setEnabled] = useState(true);


    function getMondayOfCurrentWeek(number) {
        const today = new Date();
        const first = today.getDate() + number - today.getDay() + 1;


        const monday = new Date(today.setDate(first));
        return monday;
    }

    useEffect(() => {

        console.log(getMondayOfCurrentWeek(0).toLocaleString('en-UK').slice(0, 10));
        setNWeek(getMondayOfCurrentWeek(sevenDays).toLocaleString('en-UK').slice(0, 10));
        if (sevenDays === 0) {
            setEnabled(true);
        }
    }, [sevenDays])



    const anotherWeek = () => {
        setSevenDays(sevenDays + 7);
        setEnabled(false);
    }
    const previousWeek = () => {
        setSevenDays(sevenDays - 7);

    }

    return (
        <CalendarWrapper>
            <WeekSelector>
                <Circle disabled={enabled} onClick={previousWeek}><GrFormPrevious /></Circle>
                <h3>WEEK COMMENCING {nWeek}</h3>
                <Circle onClick={anotherWeek}><GrFormNext /></Circle>

            </WeekSelector>
            <CalendarDiv>
                <CalendarBody>
                    <CRow>

                        <th day='Monday'><span>MON</span></th>
                        <th day='Tuesday'><span>TUE</span></th>
                        <th day='Wednesday'><span>WED</span></th>
                        <th day='Thursday'><span>THU</span></th>
                        <th day='Friday'><span>FRI</span></th>
                        <th day='Saturday'><span>SAT</span></th>
                    </CRow>
                    <CalendarTable time='9AM - 12PM' />
                    <CalendarTable time='12PM - 3PM' />
                    <CalendarTable time='3PM - 6PM' />
                </CalendarBody>
            </CalendarDiv>

        </CalendarWrapper>
    )
}

export default Calendar;

const CalendarWrapper = styled.div`
width: 100%;
height:300px;
`;
const WeekSelector = styled.div`
width: 100%;
height:50px;
display: flex;
align-items: center;
justify-content: center;


h3{
    margin: 0 20px;
    font-size:16px;
}
`;


const Circle = styled.button`

    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.4s ease;
    border:3px solid #3498db;
    z-index: 2;
:disabled{
    border:3px solid #e0e0e0;
    cursor:not-allowed;
}
    

  `

const CalendarDiv = styled.table`
  width:100%;
  height:250px;
  border:1px solid blue;
  
  `

const CalendarBody = styled.tbody`
  width:100%;
  height:100%;
  border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
  `;

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
}

`;