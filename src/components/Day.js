import React from "react";
import styled from "styled-components";

const Day = () => {
  return (
    <DayWrap>
      <div className="oneWeek">
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
      </div>
      <div className="oneWeek">
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
      </div>
      <div className="oneWeek">
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
      </div>
      <div className="oneWeek">
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
        <div className="date">1일</div>
      </div>
    </DayWrap>
  );
};

const DayWrap = styled.div`
  font-size: 18px;
  font-weight: 600;
  .oneWeek {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .date {
    width: 100%;
    height: 100px;
    text-align: right;
    padding: 10px 10px;
    border-bottom: 1px lightgray solid;
    border-right: 1px lightgray solid;
  }
`;

export default Day;
