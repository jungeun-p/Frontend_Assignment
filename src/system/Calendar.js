import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CalendarPage from "../pages/CalendarPage";
import { actions } from "../store/schedule";
import dayjs from "dayjs";
import AddEvent from "../components/AddEvent";

const Calendar = () => {
  const dispatch = useDispatch();
  const today = dayjs();

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

  return (
    <>
      <CalendarPage
        onChange={onChange}
        deleteSchedule={deleteSchedule}
        setDay={setDay}
      />
      <AddEvent day={day} onChange={onChange} addSchedule={addSchedule} />
    </>
  );
};

export default React.memo(Calendar);
