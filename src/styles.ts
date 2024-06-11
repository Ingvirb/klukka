import styled from "styled-components";

// Define the prop type
interface DarkModeProps {
  isDarkMode: boolean;
}

export const Wrapper = styled.div<DarkModeProps>`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ isDarkMode }) =>
    isDarkMode
      ? "linear-gradient(to bottom, #1e1e1e, #3e3e3e)"
      : "linear-gradient(to bottom, #72ecfa, #72fab6)"};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
`;

export const CustomIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: salmon;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomCheckedIcon = styled(CustomIcon)`
  background-color: rgba(250, 128, 114, 0.5); /* 50% transparency */
`;

export const CustomUncheckedIcon = styled(CustomIcon)`
  background-color: salmon;
`;

export const ToggleButtonWrapper = styled.button<DarkModeProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  margin-bottom: 70px;
  padding: 4px 8px;
  font-size: 10px;
  background: ${({ isDarkMode }) => (isDarkMode ? "#444" : "salmon")};
  color: ${({ isDarkMode }) =>
    isDarkMode ? "#fff" : "#fff"}; /* Use white text color for both modes */
  border: 1px solid ${({ isDarkMode }) => (isDarkMode ? "#666" : "salmon")};
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, border 0.3s, transform 0.3s;
  box-shadow: ${({ isDarkMode }) =>
    isDarkMode
      ? "0 4px 10px rgba(0, 0, 0, 0.2)"
      : "0 4px 10px rgba(0, 0, 0, 0.1)"};

  &:hover {
    background: ${({ isDarkMode }) =>
      isDarkMode
        ? "#666"
        : "#e9967a"}; /* Lighter salmon for hover in light mode */
    border-color: ${({ isDarkMode }) =>
      isDarkMode
        ? "linear-gradient(to bottom, #1e1e1e, #3e3e3e)"
        : "linear-gradient(to bottom, #72ecfa, #72fab6)"}; /* Match the background gradient */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px
      ${({ isDarkMode }) => (isDarkMode ? "#666" : "#e9967a")};
  }
`;

export const Clock = styled.div<DarkModeProps>`
  height: 400px;
  width: 400px;
  border: 1.5px solid ${({ isDarkMode }) => (isDarkMode ? "#fff" : "salmon")};
  box-shadow: 0px 10px 100px 1px
    ${({ isDarkMode }) => (isDarkMode ? "#333" : "salmon")};
  border-radius: 50%;
  position: relative;
  transition: transform 0.3s, border-color 0.3s; /* Add transition for smoother effect */
  &:hover {
    transform: scale(1.05); /* Scale up the clock on hover */
    border-color: ${({ isDarkMode }) =>
      isDarkMode ? "#888" : "rgba(250, 128, 114, 0.5)"};
  }
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
  box-shadow: 10px 10px 60px 20px pink;
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
