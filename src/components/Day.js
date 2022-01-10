import React from "react";
import styled from "styled-components";

const Day = ({ createCalendar }) => {
  return <DayWrap>{createCalendar()}</DayWrap>;
};

const DayWrap = styled.div`
  font-size: 17px;
  font-weight: 400;
  .oneWeek {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .date {
    width: 100%;
    height: 150px;
    text-align: right;
    padding: 5px 10px;
    border-bottom: 1px lightgray solid;
    border-right: 1px lightgray solid;
    cursor: pointer;
    .text {
      .day {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        line-height: 26px;
      }
      .selected {
        width: 26px;
        height: 26px;
        background-color: black;
        color: white;
      }
      .today {
        width: 24px;
        height: 24px;
        background-color: tomato;
        color: white;
      }
    }
    .none {
      color: lightgray;
    }
  }
  .weekend {
    background-color: #f3f3f3;
    color: gray;
  }
`;

export default Day;
