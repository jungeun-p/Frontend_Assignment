import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Day = ({
  today,
  setDay,
  viewDate,
  selectDate,
  setSelectDate,
  deleteSchedule,
}) => {
  const scheduleList = useSelector((state) => state.schedule);
  // 해의 첫번째 주
  const startWeek = viewDate.startOf("month").week();
  // 해의 마지막 주
  const endWeek =
    viewDate.endOf("month").week() === 1 ? 53 : viewDate.endOf("month").week();
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
            let currentDate = current.format("YYYYMMDD");
            return (
              <div
                className={`date ${isWeekend}`}
                key={`${week}_${i}`}
                onClick={() => {
                  setSelectDate(current);
                  setDay((state) => ({
                    ...state,
                    date: currentDate,
                  }));
                }}
              >
                <div className={`text ${isNone}`}>
                  <span className={`day ${isSelected} ${isToday}`}>
                    {current.format("D")}
                  </span>
                  <span>일</span>
                </div>
                {/* schedule 일정 & 공휴일 일정 */}
                {scheduleList.map((item, index) => (
                  <div className="schedule" key={index}>
                    {
                      // 공휴일인 스케줄일 경우
                      item.isHoliday === "Y" ? (
                        <div className="holidayTitle">
                          {current.format("YYYYMMDD") === `${item.locdate}` &&
                            item.dateName}
                        </div>
                      ) : (
                        // 일반 스케줄일 경우
                        <div
                          // key={index}
                          className="scheduleTitle"
                          // 일정 삭제 함수
                          onClick={() => deleteSchedule(item.date)}
                        >
                          {current.format("YYYYMMDD") === item.date &&
                            item.title}
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    );
  }
  return <DayWrap>{calendar}</DayWrap>;
};

const DayWrap = styled.div`
  font-size: 17px;
  font-weight: 400;
  // 한 주
  .oneWeek {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  // 한 박스
  .date {
    width: 100%;
    height: 150px;
    text-align: right;
    padding: 5px 10px;
    border-bottom: 1px #f3f3f3 solid;
    border-right: 1px #f3f3f3 solid;
    cursor: pointer;
    // 박스 안의 숫자(일)
    .text {
      height: 24px;
      .day {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
      }
      // 선택한 날짜
      .selected {
        width: 24px;
        height: 24px;
        background-color: black;
        color: white;
      }
      // 오늘 날짜
      .today {
        width: 24px;
        height: 24px;
        background-color: tomato;
        color: white;
      }
    }
    .schedule {
      font-size: 12px;
      line-height: 20px;
      vertical-align: middle;
      color: #ffffff;
      margin-top: 5px;
      .holidayTitle {
        background-color: pink;
        padding-right: 5px;
        border-radius: 5px;
      }
      .scheduleTitle {
        background-color: skyblue;
        padding-right: 5px;
        border-radius: 5px;
      }
    }
    // 지난 달 혹은 다음 달 날짜
    .none {
      color: lightgray;
    }
  }
  // 주말
  .weekend {
    background-color: #f3f3f3;
    color: gray;
  }
  // 일정 추가
  /* .schdule {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    .title {
      height: 15px;
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 2px solid lightgray;
      margin-right: 5px;
      background: none;
    }
    .button {
      font-size: 10px;
      border: none;
      width: 40%;
      border-radius: 4px;
    }
  } */
`;

// const AddEvent = ({ isSelected, onChange, schedule }) => {
//   return (
//     isSelected && (
//       <div className="schdule">
//         <input
//           className="title"
//           name="title"
//           value={schedule.title}
//           onChange={onChange}
//         />
//         <button className="button" type="button" onClick={() => {}}>
//           추가
//         </button>
//       </div>
//     )
//   );
// };

export default React.memo(Day);
