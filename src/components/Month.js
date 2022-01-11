import React from "react";
import styled from "styled-components";

const Month = ({ viewDate, changeMonth }) => {
  return (
    <MonthWrap>
      <MonthDate>
        <div className="thisYear">{`${viewDate.format("YYYY")}년`}</div>
        <div className="thisMonth">{`${viewDate.format("M")}월`}</div>
      </MonthDate>
      <ChangeMonthWrap>
        <div
          className="icon change"
          onClick={() => changeMonth(viewDate, "decrease")}
        >{`<`}</div>
        <div
          className="icon today"
          onClick={() => changeMonth(viewDate, "today")}
        >
          오늘
        </div>
        <div
          className="icon change"
          onClick={() => changeMonth(viewDate, "increase")}
        >{`>`}</div>
      </ChangeMonthWrap>
    </MonthWrap>
  );
};

const MonthWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const MonthDate = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  font-weight: 800;
  .thisYear {
    margin-right: 10px;
  }
`;

const ChangeMonthWrap = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  .icon {
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px lightgray solid;
  }
`;

export default Month;
