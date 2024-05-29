import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Clock = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid salmon;
  border-radius: 50%;
  //background-color: green;
`;

export const HourHand = styled.div<{ rotation: number }>`
  height: 5px;
  width: 5px;
  //background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 125px;
    width: 3px;
    background-color: salmon;
    position: absolute;
    bottom: 0;
  }
`;

export const MinuteHand = styled.div<{ rotation: number }>`
  height: 5px;
  width: 5px;
  //background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 175px;
    width: 3px;
    background-color: salmon;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SecondHand = styled.div<{ rotation: number }>`
  height: 5px;
  width: 5px;
  //background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 125px;
    width: 1px;
    background-color: salmon;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
