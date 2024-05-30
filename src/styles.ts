import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #72ecfa, #72fab6);
`;

export const Clock = styled.div`
  height: 400px;
  width: 400px;
  border: 1.5px solid salmon;
  border-radius: 50%;
  position: absolute;
  transition: transform 0.3s, border-color 0.3s; /* Add transition for smoother effect */
  &:hover {
    transform: scale(1.05); /* Scale up the clock on hover */
    border-color: rgba(250, 128, 114, 0.5);
    // opacity: 0.5; /* 50% less visible salmon color */
  }
  //background-color: green;
  //background-color: green;
`;

export const CenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: salmon;
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

export const Number = styled.div<{ angle: number }>`
  position: absolute;
  top: 46%;
  left: 48%;
  transform-origin: 50% 50%;
  transform: ${(p) =>
    `rotate(${p.angle}deg) translate(-0%, -175px) rotate(-${p.angle}deg)`};
  font-size: 24px;
  font-weight: bold;
  color: salmon;
  text-align: center;
`;
