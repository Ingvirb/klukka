import useTime from "./useTime";
import * as S from "./styles";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Clock() {
  const time = useTime();

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
}
