import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SERVICE_KEY } from "../lib/constant";
import { actions, Types } from "./schedule";

function fetchHolidayApi(year) {
  return axios
    .get(
      `/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${year}&ServiceKey=${SERVICE_KEY}&_type=json&numOfRows=100`
    )
    .then((response) => {
      const holidays = response.data.response.body.items.item;
      return {
        holidays,
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

function* holidaySchedule({ year }) {
  const { holidays, status } = yield call(fetchHolidayApi, year);
  if (holidays) {
    yield put(actions.fetchHolidaySuccess(holidays));
  } else {
  }
}

export default function* scheduleSaga() {
  yield takeEvery(Types.FetchHoliday, holidaySchedule);
}
