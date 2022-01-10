import React, { useEffect, useState } from "react";
import { getHolidayDate } from "../API/HolidayApi";
import CalendarPage from "../pages/CalendarPage";

const Calendar = () => {
  const [schedule, setSchedule] = useState([
    {
      id: "",
      date: "",
      title: "",
    },
  ]);

  // 캘린더 생성 함수
  const createCalendar = () => {};

  // 월 변경 함수
  const changeMonth = () => {};

  // 스케줄 추가 함수
  const addSchedule = () => {};

  // 스케줄 삭제 함수
  const deleteSchedule = () => {};

  useEffect(() => {
    // getHolidayDate();
  }, []);
  return <CalendarPage schedule={schedule} />;
};

export default Calendar;
