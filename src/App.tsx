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
            <S.Number key={number} angle={angle}>
              {number}
            </S.Number>
          );
        })}
        <S.CenterCircle />
        <S.HourHand rotation={time.hours} />
        <S.MinuteHand rotation={time.minutes} />
        <S.SecondHand rotation={time.seconds} />
      </S.Clock>
      <S.ToggleButtonWrapper>
        <Switch
          onChange={handleToggle}
          checked={isDarkMode}
          onColor="salmon"
          offColor="salmon"
          uncheckedIcon={<S.CustomUncheckedIcon />}
          checkedIcon={<S.CustomCheckedIcon />}
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
