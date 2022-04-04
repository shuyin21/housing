import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgressSteps = () => {




    const [currentActive, setCurrentActive] = useState(0);
    const [disable, setDisable] = useState(true);
    const [nextDisable, setNextDisable] = useState(false);

    const [circle2, setCircle2] = useState(false);
    const [circle3, setCircle3] = useState(false);

    const nextHandler = () => {
        setCurrentActive(currentActive + 1);

        setDisable(false);


    }

    const prevHandler = () => {
        setCurrentActive(currentActive - 1);


    }

    useEffect(() => {
        if (currentActive <= 0) {
            setDisable(true);
            setCurrentActive(0);
            setCircle2(false);
        }
        if (currentActive === 1) {
            setCircle2(true);
            setCircle3(false);
        }
        if (currentActive >= 2) {
            setCurrentActive(2);
            setNextDisable(true);
            setCircle3(true);

        }
        else if (currentActive < 2) {
            setNextDisable(false);
        }
        console.log(currentActive);
    }, [currentActive])



    return (
        <Wrapper>
            <Container>
                <ProgressContainer >
                    <Progress id="progress"></Progress>
                    <Circle activate={true}>1</Circle>
                    <Circle activate={circle2} >2</Circle>
                    <Circle activate={circle3}>3</Circle>

                </ProgressContainer>

                <Btn onClick={prevHandler} id="prev" disabled={disable} >Prev</Btn>
                <Btn onClick={nextHandler} id="next" disabled={nextDisable}>Next</Btn>

            </Container>
        </Wrapper>
    )
}

export default ProgressSteps



const Container = styled.div`
text-align: center;

`;

const Wrapper = styled.div`
background-color: #f6f7fb;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;

`;

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;

    :before {
    content: '';
    background-color:  #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
  `;



const Progress = styled.div`
    background-color: #3498db;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: 2;
    transition: 0.4s ease;
  `


const Circle = styled.div`
background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 3px solid #e0e0e0; */
    transition: 0.4s ease;
    border:${({ activate }) => (activate === true ? '3px solid #3498db' : '3px solid #e0e0e0')};

    

  `




const Btn = styled.button`
   background-color:#3498db;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;

    :active {
    transform: scale(0.98);
  }

  :focus {
    outline: 0;
  }

  :disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  `
