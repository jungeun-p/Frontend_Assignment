import React from "react";
import styled from "styled-components";

const Week = () => {
  return (
    <WeekWrap>
      <div className="WeekName">일</div>
      <div className="WeekName">월</div>
      <div className="WeekName">화</div>
      <div className="WeekName">수</div>
      <div className="WeekName">목</div>
      <div className="WeekName">금</div>
      <div className="WeekName">토</div>
    </WeekWrap>
  );
};

const WeekWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px lightgray solid;
  font-size: 16px;
  font-weight: 400;
  .WeekName {
    width: 100%;
    padding: 10px 10px;
    text-align: right;
  }
`;

export default Week;
