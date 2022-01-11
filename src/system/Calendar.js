import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHolidayDate } from "../API/HolidayApi";
import CalendarPage from "../pages/CalendarPage";
import { actions } from "../store/schedule";

const Calendar = () => {
  const dispatch = useDispatch();
  // 스케줄에 추가할 일정
  const [day, setDay] = useState({
    id: "",
    date: "",
    title: "",
  });

  // 일정 추가 함수
  const addSchedule = () => {
    let daily = {
      id: day.date,
      date: day.date,
      title: day.title,
    };
    dispatch(actions.addSchedule(daily));
    setDay({ id: "", date: "", title: "" });
    // setSchedule([...schedule, daily]);
  };

  // onChange 함수
  const onChange = (e) => {
    const { name, value } = e.target;
    setDay({ ...day, [name]: value });
  };

  // 일정 삭제 함수
  const deleteSchedule = (id) => {
    dispatch(actions.deleteSchedule(id));
    //setSchedule(schedule.filter((item) => item.id !== id));
  };

  useEffect(() => {
    // getHolidayDate();
  }, []);
  return (
    <>
      <CalendarPage onChange={onChange} deleteSchedule={deleteSchedule} />
      <input name="date" value={day.date} onChange={onChange} />
      <input name="title" value={day.title} onChange={onChange} />
      <button onClick={addSchedule}>추가</button>
    </>
  );
};

export default React.memo(Calendar);
