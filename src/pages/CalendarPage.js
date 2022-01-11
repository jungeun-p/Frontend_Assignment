import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import React, { useState } from "react";
import styled from "styled-components";
import Day from "../components/Day";
import Month from "../components/Month";
import Week from "../components/Week";
import { useDispatch } from "react-redux";

const CalendarPage = ({ onChange, deleteSchedule, setDay }) => {
  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  // 월 변경 함수
  const changeMonth = (date, changeString) => {
    switch (changeString) {
      case "increase":
        return setViewDate(viewDate.add(1, "month"));
      case "decrease":
        return setViewDate(viewDate.subtract(1, "month"));
      case "today":
        return setViewDate(today);
      default:
        return date;
    }
  };

  return (
    <CalendarWrap>
      <Month viewDate={viewDate} changeMonth={changeMonth} />
      <Week />
      <Day
        setDay={setDay}
        viewDate={viewDate}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        today={today}
        onChange={onChange}
        deleteSchedule={deleteSchedule}
      />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default React.memo(CalendarPage);
