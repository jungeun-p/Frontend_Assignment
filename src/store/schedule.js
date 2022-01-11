import { createReducer } from "@reduxjs/toolkit";

export const Types = {
  AddSchedule: "schedule/AddSchedule",
  DeleteSchedule: "schedule/DeleteSchedule",
  FetchHoliday: "schedule/FetchHoliday",
  FetchHolidaySuccess: "schedule/FetchHolidaySuccess",
};
export const actions = {
  // 일정 추가
  addSchedule: (daily) => ({ type: Types.AddSchedule, daily }),
  // 일정 삭제
  deleteSchedule: (id) => ({ type: Types.DeleteSchedule, id }),
  // 공휴일 데이터 요청
  fetchHoliday: (year) => ({ type: Types.FetchHoliday, year }),
  // 공휴일 데이터 저장
  fetchHolidaySuccess: (holidays) => ({
    type: Types.FetchHolidaySuccess,
    holidays,
  }),
};

const INITIAL_STATE = [
  {
    id: "20220116",
    date: "20220116",
    title: "카페 약속 ☕️",
  },
  {
    id: "20220113",
    date: "20220113",
    title: "공원 가기 🌳",
  },
];

const reducer = createReducer(INITIAL_STATE, {
  [Types.AddSchedule]: (state, action) => {
    state.push(action.daily);
  },
  [Types.DeleteSchedule]: (state, action) =>
    state.filter((item) => item.id !== action.id),
  [Types.FetchHolidaySuccess]: (state, action) => state.concat(action.holidays),
});

export default reducer;
