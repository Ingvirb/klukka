import { useState } from "react";
import useTime from "./useTime";
import * as S from "./styles";
import Switch from "react-switch";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Clock() {
  const time = useTime();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <S.Wrapper isDarkMode={isDarkMode}>
      <S.Clock>
        {numbers.map((number) => {
          const angle = number * 30; // Each number is 30 degrees apart
          return (
            <S.Number key={number} angle={angle} isDarkMode={isDarkMode}>
              {number}
            </S.Number>
          );
        })}
        <S.CenterCircle isDarkMode={isDarkMode} />
        <S.HourHand rotation={time.hours} isDarkMode={isDarkMode} />
        <S.MinuteHand rotation={time.minutes} isDarkMode={isDarkMode} />
        <S.SecondHand rotation={time.seconds} isDarkMode={isDarkMode} />
      </S.Clock>
      <S.ToggleButtonWrapper isDarkMode={isDarkMode}>
        <Switch
          onChange={handleToggle}
          checked={isDarkMode}
          onColor="salmon"
          offColor="salmon"
          uncheckedIcon={<S.CustomUncheckedIcon isDarkMode={isDarkMode} />}
          checkedIcon={<S.CustomCheckedIcon isDarkMode={isDarkMode} />}
          height={20}
          width={40}
          handleDiameter={20}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        />
      </S.ToggleButtonWrapper>
    </S.Wrapper>
  );
}
