import { createReducer } from "@reduxjs/toolkit";

export const Types = {
  AddSchedule: "schedule/AddSchedule",
  DeleteSchedule: "schedule/DeleteSchedule",
};
export const actions = {
  addSchedule: (daily) => ({ type: Types.AddSchedule, daily }),
  deleteSchedule: (id) => ({ type: Types.DeleteSchedule, id }),
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
});

export default reducer;
