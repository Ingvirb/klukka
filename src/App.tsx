import useTime from "./useTime";
import * as S from "./styles";

export default function Clock() {
  return (
    <S.Wrapper>
      <S.Clock>
        <S.HourHand />
        <S.MinuteHand />
        <S.SecondHand />
      </S.Clock>
    </S.Wrapper>
  );
}
