import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressSteps = () => {


    const circles = document.querySelectorAll('.circle')

    const [currentActive, setCurrentActive] = useState(1);
    console.log(circles);

    const nextHandler = () => {
        setCurrentActive(currentActive++);

        console.log('circles');

        // if (currentActive > circles.length) {
        //     currentActive = circles.length
        // }

        // update()
    }

    const prevHandler = () => {
        setCurrentActive(currentActive--)

        if (currentActive < 1) {
            currentActive = 1
        }

        update()
    }

    function update() {
        circles.forEach((circle, idx) => {
            if (idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')

        // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

        // if (currentActive === 1) {
        //     prev.disabled = true
        // } else if (currentActive === circles.length) {
        //     next.disabled = true
        // } else {
        //     prev.disabled = false
        //     next.disabled = false
        // }
    }


    return (
        <Wrapper>
            <Container>
                <ProgressContainer>
                    <Progress id="progress"></Progress>
                    <Circle className="active">1</Circle>
                    <Circle >2</Circle>
                    <Circle >3</Circle>
                    <Circle >4</Circle>
                </ProgressContainer>

                <Btn onClick={prevHandler} id="prev" disabled>Prev</Btn>
                <Btn onclick={nextHandler} id="next">Next</Btn>
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
    z-index: -1;
    transition: 0.4s ease;
  `


const Circle = styled.div`background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid  #e0e0e0;
    transition: 0.4s ease;

    .active {
    border-color: #3498db;
  }

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
