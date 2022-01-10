import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Day from "../components/Day";
import Month from "../components/Month";
import Week from "../components/Week";

const CalendarPage = () => {
  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());
  console.log(viewDate.get("day"));

  // 캘린더 생성 함수
  const createCalendar = useCallback(() => {
    // 해의 첫번째 주
    const startWeek = viewDate.startOf("month").week();
    // 해의 마지막 주
    const endWeek =
      viewDate.endOf("month").week() === 1
        ? 53
        : viewDate.endOf("month").week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="oneWeek" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              // 이번 달 첫째날 부터 1일씩 더하기.
              let current = viewDate
                .startOf("week")
                .week(week)
                .add(n + i, "day"); // n+i만큼 하루를 더한다.
              // 12월달
              if (viewDate.format("MM") === 12) {
                current = viewDate
                  .startOf("week")
                  .week(week - 52)
                  .add(n + i, "day");
              }
              // 선택한 날짜
              let isSelected =
                selectDate.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";
              // 오늘 날짜
              let isToday =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "today"
                  : "";
              // 달이 다를 경우
              let isNone =
                current.format("MM") === viewDate.format("MM") ? "" : "none";
              // 주말
              let isWeekend =
                current.get("day") === 0 || current.get("day") === 6
                  ? "weekend"
                  : "";
              return (
                <div
                  className={`date ${isWeekend}`}
                  key={`${week}_${i}`}
                  onClick={() => {
                    setSelectDate(current);
                  }}
                >
                  <div className={`text ${isNone}`}>
                    <span className={`day ${isSelected} ${isToday}`}>
                      {current.format("D")}
                    </span>
                    <span>일</span>
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  }, [selectDate, viewDate]);

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
      <Day createCalendar={createCalendar} />
    </CalendarWrap>
  );
};

const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CalendarPage;
