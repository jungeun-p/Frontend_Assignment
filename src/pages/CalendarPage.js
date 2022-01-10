import React from "react";
import styled from "styled-components";
import Day from "../components/Day";
import Month from "../components/Month";
import Week from "../components/Week";

const CalendarPage = () => {
  return (
    <CalendarWrap>
      <Month />
      <Week />
      <Day />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CalendarPage;
