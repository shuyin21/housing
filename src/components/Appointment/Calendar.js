import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Calendar = () => {
    const [nWeek, setNWeek] = useState();


    function getMondayOfCurrentWeek() {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1;

        console.log(today);
        console.log(first);
        const monday = new Date(today.setDate(first));
        return monday;
    }

    useEffect(() => {
        // var today = new Date();
        // setNWeek(today);
    })
    console.log(getMondayOfCurrentWeek().toLocaleString('en-UK'));

    const nextweek = () => {
        let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        console.log(nextweek);
        let nextweekDay = nextweek.getDate();
        let nameDay = days[nextweekDay];
        setNWeek(nextweekDay);
    }
    const anotherWeek = () => {

    }


    return (
        <CalendarWrapper>
            <WeekSelector>
                <Circle disabled><GrFormPrevious /></Circle>
                <h3>WEEK COMMENCING</h3>
                <Circle><GrFormNext /></Circle>
            </WeekSelector>
            <button onClick={nextweek}>next week</button>
            <h1>{nWeek}</h1>
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